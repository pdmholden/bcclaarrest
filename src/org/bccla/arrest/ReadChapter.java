package org.bccla.arrest;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.widget.TextView;

import org.bccla.arrest.PocketbookContent;

public class ReadChapter extends Activity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // get chap id from intent
        Intent caller = getIntent();
        long id = caller.getLongExtra(TableOfContents.CH_ID, 77);

        PocketbookContent content = new PocketbookContent(this);
        SQLiteDatabase db = content.getReadableDatabase();

        Cursor rows = db.query("book_content",
            new String[] { "id", "content" },
            "id=?",
            new String[] { String.valueOf(id) },
            null,
            null,
            "id",
            null);

        // get chap data
        rows.moveToFirst();
        String chapterText = rows.getString(1);

        rows.close();
        db.close();
        content.close();

        // display the chap in view
        setContentView(R.layout.read_chapter);
        TextView chText = (TextView) findViewById(R.id.one_chapter);
        chText.setText(chapterText);
    }
}
