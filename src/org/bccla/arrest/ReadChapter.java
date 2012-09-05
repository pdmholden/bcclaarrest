package org.bccla.arrest;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;
import android.content.Intent;

public class ReadChapter extends Activity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // get chap id from intent
        Intent caller = getIntent();
        long id = caller.getLongExtra(TableOfContents.CH_ID, 77);

        // get chap data
        String content = "Now displaying chapter " + id;

        // display the chap in view
        TextView chText = new TextView(this);
        chText.setText(content);

        setContentView(chText);
    }
}
