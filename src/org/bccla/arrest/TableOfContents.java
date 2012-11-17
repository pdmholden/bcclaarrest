package org.bccla.arrest;

import android.app.ListActivity;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import org.bccla.arrest.PocketbookContent;

public class TableOfContents extends ListActivity
{
    public final static String CH_ID = "org.bccla.arrestbook.CH_ID";

    private PocketbookContent mContent;
    private SQLiteDatabase mDB;
    private Cursor mRows;
    private ArrayAdapter<String> mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onResume()
    {
        super.onResume();

        mContent = new PocketbookContent(this);
        mDB = mContent.getReadableDatabase();

        // PDMH: need check for db existence & finish()
        //    Toast noDB = Toast.makeText(mCtx, R.string.db_not_loaded,
        //        Toast.LENGTH_LONG);
        //    noDB.show();
        //    finish();

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
        mAdapter = new ArrayAdapter<String>(this,
            R.layout.toc_row, chapters);
        setListAdapter(mAdapter);
    }

    @Override
    protected void onPause()
    {
        super.onPause();
        mRows.close();
        mDB.close();
        mContent.close();
    }

    @Override
    protected void onListItemClick(ListView toc, View chapter,
        int pos, long id)
    {
        Intent intent = new Intent(this, ReadChapter.class);
        intent.putExtra(CH_ID, id + 1); // add 1 as DB row IDs start at 1
        startActivity(intent);
    }
}
