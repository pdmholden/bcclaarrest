package org.bccla.arrest;

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
    private static final String DB_NAME = "arrest_pocketbook.sqlite";
    private static final int DB_SCHEMA_VER = 1;

    public PocketbookContent(Context ctx)
    {
        super(ctx, DB_NAME, null, DB_SCHEMA_VER);
    }

    @Override
    public void onCreate(SQLiteDatabase db)
    {
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVer, int newVer)
    {
    }
}
