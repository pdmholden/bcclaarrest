package org.bccla.arrestbook;

import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.view.View;
import android.content.Intent;

public class TableOfContents extends ListActivity
{
    public final static String CH_ID = "org.bccla.arrestbook.CH_ID";

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

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
