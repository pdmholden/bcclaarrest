package org.bccla.arrest;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;

public class ContentsActivity extends FragmentActivity
{
    public final static String CH_ID = "org.bccla.arrestbook.CH_ID";
    public final static long DB_ID_NOT_FOUND = 1949;
    private final String FRAG_TAG =
        ContentsActivity.class.getCanonicalName() + ".fragment";

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.toc_list);

        FragmentManager fragMgr = getSupportFragmentManager();
        FragmentTransaction xact = fragMgr.beginTransaction();
        if (null == fragMgr.findFragmentByTag(FRAG_TAG))
        {
            xact.add(R.id.toc_frame,
                new ContentsFragment(),
                FRAG_TAG);
        }
        xact.commit();
    }
}
