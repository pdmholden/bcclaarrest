package org.bccla.arrestbook;

import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;

public class TableOfContents extends ListActivity
{
    /** Called when the activity is first created. */
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
}
