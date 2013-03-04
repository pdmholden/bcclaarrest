package org.bccla.arrest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;

public class ReadActivity extends FragmentActivity
{
    private final String FRAG_TAG =
        ReadActivity.class.getCanonicalName() + ".fragment";

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // get chap id from intent
        Intent caller = getIntent();
        long id = caller.getLongExtra(ContentsActivity.CH_ID,
            ContentsActivity.DB_ID_NOT_FOUND); // handle error later

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
