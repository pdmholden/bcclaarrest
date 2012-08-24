package org.bccla.arrestbook;

import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.view.View;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import java.io.IOException;
import android.util.Log;

public class TableOfContents extends ListActivity
{
    private final static String TAG = "TableOfContents";
    public final static String CH_ID = "org.bccla.arrestbook.CH_ID";
    private PocketbookContent mDB;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        mDB = new PocketbookContent(this);
        SQLiteDatabase db = mDB.getReadableDatabase();

        try
        {
            mDB.setupDB();
        }
        catch (IOException ioe)
        {
            Log.e(TAG, ioe.getMessage());
        }

        // get the data (from where?)
        String[] chapters = new String[] {
            "Important Notice and Qualification",
            "Introduction",
            "Just Making Conversation",
            "Police are Detaining You",
            "Being Detained",
            "Police are Arresting You",
            "When You are Arrested" };

        // set the adapter & view (not using XML)
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
            android.R.layout.simple_list_item_1, chapters);
        setListAdapter(adapter);
    }

    @Override
    protected void onListItemClick(ListView toc, View chapter,
        int pos, long id)
    {
        Intent intent = new Intent(this, ReadChapter.class);
        intent.putExtra(CH_ID, id);
        startActivity(intent);
    }
}
