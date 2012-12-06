package org.bccla.arrest;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v4.app.ListFragment;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import org.bccla.arrest.PocketbookContent;
import org.bccla.arrest.ReadActivity;

public class ContentsFragment extends ListFragment
{
    private PocketbookContent mContent;
    private SQLiteDatabase mDB;
    private Cursor mRows;
    private ArrayAdapter<String> mAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onResume()
    {
        super.onResume();

        mContent = new PocketbookContent(getActivity());
        mDB = mContent.getReadableDatabase();

        // in case DB is not there or there were other errors in opening it
        if (null == mDB || false == mDB.isOpen())
        {
            Toast burned = Toast.makeText(getActivity(), R.string.db_not_loaded,
                Toast.LENGTH_LONG);
            burned.show();
            getActivity().finish();
        }

        mRows = mDB.query("book_content",
            new String[] { "id", "title" },
            null,
            null,
            null,
            null,
            "id",
            null);

        String[] chapters = new String[mRows.getCount()];
        mRows.moveToFirst();
        for (int i = 0; i < mRows.getCount(); i++)
        {
            // assume title is in column 1
            chapters[i] = mRows.getString(1);
            mRows.moveToNext();
        }

        // set the adapter & insert data into view
        mAdapter = new ArrayAdapter<String>(getActivity(),
            R.layout.toc_row, chapters);
        setListAdapter(mAdapter);
    }

    @Override
    public void onPause()
    {
        super.onPause();
        mRows.close();
        mDB.close();
        mContent.close();
    }

    @Override
    public void onListItemClick(ListView toc, View chapter,
        int pos, long id)
    {
        Intent intent = new Intent(getActivity(), ReadActivity.class);
        // add 1 as DB row IDs start at 1
        intent.putExtra(ContentsActivity.CH_ID, id + 1);
        startActivity(intent);
    }
}
