package org.bccla.arrest;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import org.bccla.arrest.PocketbookContent;

public class ReadFragment extends Fragment
{
    // create the obj and instantiate it with the chap id
    public static ReadFragment newInstance(long id)
    {
        Bundle init = new Bundle();
        init.putLong(ContentsActivity.CH_ID, id);

        ReadFragment frag = new ReadFragment();
        frag.setArguments(init);
        return frag;
    }

    private PocketbookContent mContent;
    private SQLiteDatabase mDB;
    private Cursor mRows;
    private long idFromIntent;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // retrive id from saved instance
        if (null == savedInstanceState)
        {
            savedInstanceState = getArguments();
        }
        idFromIntent = savedInstanceState.getLong(ContentsActivity.CH_ID);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
        Bundle b)
    {
        // inflate the view here, populate the TextView in onResume()
        return(inflater.inflate(R.layout.chapter_frag, container, false));
    }

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState)
    {
        // save chap id
        super.onSaveInstanceState(savedInstanceState);
        savedInstanceState.putLong(ContentsActivity.CH_ID, idFromIntent);
    }

    @Override
    public void onResume()
    {
        super.onResume();

        mContent = new PocketbookContent(getActivity());
        mDB = mContent.getReadableDatabase();

        mRows = mDB.query("book_content",
            new String[] { "id", "content" },
            "id=?",
            new String[] { String.valueOf(idFromIntent) },
            null,
            null,
            "id",
            null);

        // get chap data
        mRows.moveToFirst();
        String chapterText = mRows.getString(1);

        // display the chap in view
        View v = getView();
        TextView chText = (TextView) v.findViewById(R.id.one_chapter);
        chText.setText(chapterText);
    }

    @Override
    public void onPause()
    {
        super.onPause();
        mRows.close();
        mDB.close();
        mContent.close();
    }
}
