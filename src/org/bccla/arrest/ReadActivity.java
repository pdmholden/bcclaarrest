package org.bccla.arrest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.widget.Toast;

public class ReadActivity extends FragmentActivity
{
    private final long DB_ID_NOT_FOUND = 1949;
    private final String FRAG_TAG =
        ReadActivity.class.getCanonicalName() + ".fragment";

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // get chap id from intent
        Intent caller = getIntent();
        long id = caller.getLongExtra(TableOfContents.CH_ID,
            DB_ID_NOT_FOUND);
        if (DB_ID_NOT_FOUND == id)
        {
            Toast burned = Toast.makeText(this, R.string.db_id_bad,
                Toast.LENGTH_LONG);
            burned.show();
            super.onBackPressed();
        }

        setContentView(R.layout.chapter_main);

        FragmentManager fragMgr = getSupportFragmentManager();
        FragmentTransaction xact = fragMgr.beginTransaction();
        if (null == fragMgr.findFragmentByTag(FRAG_TAG))
        {
            xact.add(R.id.chapter_frame,
                ReadFragment.newInstance(id),
                FRAG_TAG);
        }
        xact.commit();
    }
}
