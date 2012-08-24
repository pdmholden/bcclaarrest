package org.bccla.arrestbook;

import android.database.sqlite.SQLiteOpenHelper;
import android.database.sqlite.SQLiteDatabase;
import android.content.Context;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.FileNotFoundException;

class PocketbookContent extends SQLiteOpenHelper
{
    private static final String DB_PATH =
        "/data/data/org.bccla.arrestbook/databases/";
    private static final String DB_NAME = "arrest_pocketbook.sqlite";
    private static final int DB_SCHEMA_VER = 1;

    private final Context mCtx;

    public PocketbookContent(Context ctx)
    {
        super(ctx, DB_NAME, null, DB_SCHEMA_VER);
        mCtx = ctx;
    }

    @Override
    public void onCreate(SQLiteDatabase db)
    {
        try
        {
            setupDB();
        }
        catch (FileNotFoundException fnfe)
        {
        }
        catch (IOException ioe)
        {
        }
    }

    public void setupDB() throws IOException
    {
        /* copy db from assets to /data/data/. yes, stupid, but
         * that's how they say to do it. */
        InputStream in = mCtx.getAssets().open(DB_NAME);
        OutputStream out = new FileOutputStream(DB_PATH + DB_NAME);
        byte[] buffer = new byte[1024];
        int len;

        while ((len = in.read(buffer)) > 0)
        {
            out.write(buffer, 0, len);
        }

        out.flush();
        out.close();
        in.close();
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVer, int newVer)
    {
    }
}
