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
