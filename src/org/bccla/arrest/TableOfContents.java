package org.bccla.arrest;

import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.view.View;
import android.content.Intent;
import java.io.IOException;
import android.util.Log;
import android.content.res.AssetManager;
import java.io.InputStream;
import java.io.FileOutputStream;
import java.io.File;
import org.bccla.arrest.PocketbookContent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

public class TableOfContents extends ListActivity
{
    public final static String CH_ID = "org.bccla.arrestbook.CH_ID";
    private final String TAG = "TableOfContents";
    private final String DB_DIR = "/data/data/org.bccla.arrest/databases";
    private final String DB_NAME = "arrest_pocketbook.sqlite";

    private void importAssets() throws IOException
    {
        AssetManager am = getAssets();
        InputStream in = am.open(DB_NAME);
        FileOutputStream out;
        byte[] buffer = new byte[1024];
        int len;
        File dir, db;

        dir = new File(DB_DIR);
        dir.mkdirs();
        db = new File(dir, DB_NAME);

        // FIXME: if not first run return

        out = new FileOutputStream(db);
        while ((len = in.read(buffer)) > 0)
        {
            out.write(buffer, 0, len);
        }

        out.flush();
        out.close();
        in.close();
        if (!db.exists())
        {
            Log.e(TAG, DB_DIR + "/" + DB_NAME + " does not exist");
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        try
        {
            importAssets();
        }
        catch (IOException ioe)
        {
            Log.e(TAG, ioe.getMessage());
            // FIXME: should probably quit
        }

        PocketbookContent content = new PocketbookContent(this);
        SQLiteDatabase db = content.getReadableDatabase();

        Cursor rows = db.query("book_content",
            new String[] { "id", "title" },
            null,
            null,
            null,
            null,
            "id",
            null);

        String[] chapters = new String[rows.getCount()];
        rows.moveToFirst();
        for (int i = 0; i < rows.getCount(); i++)
        {
            // assume title is in column 1
            chapters[i] = rows.getString(1);
            rows.moveToNext();
        }

        rows.close();
        db.close();
        content.close();

        // set the adapter & insert data into view
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
            R.layout.toc_row, chapters);
        setListAdapter(adapter);
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