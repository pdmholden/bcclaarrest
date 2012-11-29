package org.bccla.arrest;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import org.bccla.arrest.PocketbookContent;

public class ReadChapter extends Activity
{
    private final long DB_ID_NOT_FOUND = 1949;

    private PocketbookContent mContent;
    private SQLiteDatabase mDB;
    private Cursor mRows;
    private long idFromIntent;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // get chap id from intent
        Intent caller = getIntent();
        idFromIntent = caller.getLongExtra(TableOfContents.CH_ID,
            DB_ID_NOT_FOUND);
        if (DB_ID_NOT_FOUND == idFromIntent)
        {
            Toast burned = Toast.makeText(this, R.string.db_id_bad,
                Toast.LENGTH_LONG);
            burned.show();
            super.onBackPressed();
        }
    }

    @Override
    public void onResume()
    {
        super.onResume();

        mContent = new PocketbookContent(this);
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
        setContentView(R.layout.read_chapter);
        TextView chText = (TextView) findViewById(R.id.one_chapter);
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
