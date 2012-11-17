package org.bccla.arrest;

import android.content.Context;
import android.content.res.AssetManager;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.IOException;

class PocketbookContent extends SQLiteOpenHelper
{
    private final String TAG = "PocketbookContent";
    private final Context mCtx;

    private final String DB_DIR = "/data/data/org.bccla.arrest/databases";
    private static final String DB_NAME = "arrest_pocketbook.sqlite";
    private static final int ORIG_REL_SCHEMA_VER = 1;
    private static final int DB_SCHEMA_VER = 2;

    public PocketbookContent(Context ctx)
    {
        super(ctx, DB_NAME, null, DB_SCHEMA_VER);
        mCtx = ctx;

        try
        {
            importAssets(false);
        }
        catch (IOException ioe)
        {
            Log.e(TAG, "importAssets() exception" + ioe.getMessage());
        }
    }

    private void importAssets(boolean overWrite) throws IOException
    {
        AssetManager am = mCtx.getAssets();
        InputStream in = am.open(DB_NAME);
        FileOutputStream out;
        byte[] buffer = new byte[1024];
        int len;
        File dir, db;

        dir = new File(DB_DIR);
        dir.mkdirs();
        db = new File(dir, DB_NAME);

        // if not first run return
        if (!overWrite && db.exists())
        {
            Log.i(TAG, DB_DIR + "/" + DB_NAME + " exists, do nothing");
            in.close();
            return;
        }

        // copy the DB from assets to standard DB dir created above
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
    public void onCreate(SQLiteDatabase db)
    {
        // do nothing, this is a stupid funcction
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVer, int newVer)
    {
        if (ORIG_REL_SCHEMA_VER == oldVer &&
            DB_SCHEMA_VER == newVer)
        {
            try
            {
                importAssets(true);
            }
            catch (IOException ioe)
            {
                Log.e(TAG, "importAssets() exception" + ioe.getMessage());
            }
        }
    }
}
