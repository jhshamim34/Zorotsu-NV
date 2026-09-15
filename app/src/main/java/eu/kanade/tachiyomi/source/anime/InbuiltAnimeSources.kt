package eu.kanade.tachiyomi.source.anime

import android.content.Context
import ani.dantotsu.aniyomi.anime.sources.anikoto.Anikoto
import eu.kanade.tachiyomi.animesource.AnimeSource

object InbuiltAnimeSources {

    fun createSources(context: Context): List<AnimeSource> {
        val anikotoPrefs = context.getSharedPreferences("anikoto_inbuilt", Context.MODE_PRIVATE)
        return listOf(Anikoto(anikotoPrefs))
    }
}
