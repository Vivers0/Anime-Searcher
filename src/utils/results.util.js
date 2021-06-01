module.exports = class OtherResults {
    formOtherResults(results, resultIndex) {
        let otherResults = {
            trace: '',
            sauce: '',
        };

        for (let i = 0; i < results.length; i++) {
            let r = results[i];
            if (r.from == 'trace') {
                otherResults.trace += `${i == resultIndex ? '👉 ' : ''}[${r.title_english || r.title_romaji}](https://myanimelist.net/anime/${r.mal_id})\n`
            } else {
                otherResults.sauce += `${i == resultIndex ? '👉 ' : ''}[${r.source}](https://anidb.net/anime/${r.anidb_aid})\n`
            }
        }
        return otherResults;
    }
}