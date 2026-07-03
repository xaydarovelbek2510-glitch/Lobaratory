package uz.botany.api.service;

import org.springframework.stereotype.Service;
import uz.botany.api.model.Laboratory;
import uz.botany.api.model.NewsItem;
import uz.botany.api.model.StatItem;

import java.util.List;
import java.util.Optional;

@Service
public class BotanyService {

    public List<NewsItem> getNews() {
        return List.of(
            new NewsItem("25", "Iyun 2026", "Chatqol tog'larida yangi o'simlik turi aniqlandi",
                "Ekspeditsiya jamoasi tomonidan Astragalus turkumiga mansub yangi tur topildi..."),
            new NewsItem("18", "Iyun 2026", "Xalqaro ilmiy konferensiya o'tkazildi",
                "Markaziy Osiyo florasi bo'yicha xalqaro simpozium 15 davlat ishtirokida..."),
            new NewsItem("10", "Iyun 2026", "Yangi laboratoriya jihozlari o'rnatildi",
                "Molekulyar biologiya laboratoriyasiga Illumina MiSeq sekvenator yetkazib berildi..."),
            new NewsItem("28", "May 2026", "Qizil Kitobning yangilangan nashri tayyorlandi",
                "O'zbekiston o'simliklari Qizil Kitobining 6-nashri chop etishga tayyorlandi..."),
            new NewsItem("15", "May 2026", "Botanik bog'da ochiq eshiklar kuni",
                "Xalqaro biologik xilma-xillik kuniga bag'ishlangan tadbirda 500 dan ortiq tashrif buyuruvchi..."),
            new NewsItem("2", "May 2026", "Orolbo'yi monitoringi natijalari e'lon qilindi",
                "UNESCO loyihasi doirasida vegetatsiya 18% ga oshganligi aniqlandi..."),
            new NewsItem("18", "Aprel 2026", "Yangi grant loyihasi boshlandi",
                "DAAD hamkorligida endemik o'simliklarning genetik xilma-xilligi loyihasi boshlandi..."),
            new NewsItem("5", "Mart 2026", "Phytotaxa jurnalida yangi maqola",
                "15 ta yangi o'simlik turi haqidagi maqola Q1 jurnalida chop etildi...")
        );
    }

    public List<StatItem> getStats() {
        return List.of(
            new StatItem("🎓", "1", "Akademik"),
            new StatItem("📜", "6", "Fan doktori"),
            new StatItem("📋", "20", "Fan nomzodi"),
            new StatItem("👨‍🔬", "15", "Ilmiy xodim"),
            new StatItem("🌿", "4300+", "O'simlik turi"),
            new StatItem("🏛️", "6", "Laboratoriya")
        );
    }

    public List<Laboratory> getLaboratories() {
        return List.of(
            new Laboratory("flora", "O'zbekiston florasi laboratoriyasi", "Prof. Tojibaev K.Sh.", 12,
                "O'zbekiston va Markaziy Osiyo florasini sistematik o'rganish",
                List.of("Flora inventarizatsiyasi", "Yangi turlarni tavsiflash", "Gerbariy boshqaruvi")),
            new Laboratory("geobotany", "Geobotanika laboratoriyasi", "PhD Beshko N.Yu.", 6,
                "O'simlik jamoalarini o'rganish va fitogeografik xaritalash",
                List.of("Geobotanik xaritalash", "Fitogeografik rayonlanish", "GIS")),
            new Laboratory("molecular", "Molekulyar biologiya laboratoriyasi", "PhD Sennikov A.N.", 8,
                "Molekulyar usullar yordamida o'simliklarning filogenetik munosabatlarini o'rganish",
                List.of("DNK barkodlash", "Filogenetika", "Populyatsiya genetikasi", "NGS")),
            new Laboratory("phytochemistry", "Fitokimyo laboratoriyasi", "DSc Mamadalieva N.Z.", 10,
                "Dorivor o'simliklardan biologik faol moddalar ajratish",
                List.of("Alkaloidlar", "Flavonoidlar", "Terpenoidlar", "Antimikrob testlar")),
            new Laboratory("ecology", "Ekologiya laboratoriyasi", "PhD Shomurodov Kh.F.", 7,
                "Noyob turlarni muhofaza qilish va ekologik monitoring",
                List.of("Qizil Kitob", "IPA", "Reintroduksiya", "GIS monitoring")),
            new Laboratory("resources", "Tabiiy resurslar laboratoriyasi", "PhD Raxmatov A.B.", 5,
                "O'simlik resurslarini baholash va barqaror foydalanish",
                List.of("Resurs baholash", "Etnobotanika", "Populyatsiya dinamikasi"))
        );
    }

    public Optional<Laboratory> getLaboratoryById(String id) {
        return getLaboratories().stream()
            .filter(lab -> lab.id().equals(id))
            .findFirst();
    }
}
