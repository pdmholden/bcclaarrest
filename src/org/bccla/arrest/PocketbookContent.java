package org.bccla.arrest;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.IOException;
import java.io.OutputStream;

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
        // should have been imported already from assets
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVer, int newVer)
    {
    }
}
