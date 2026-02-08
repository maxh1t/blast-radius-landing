'use client';
import {useState} from 'react';
import {Network} from 'lucide-react';

const copy = {
    en: {
        tag: 'Change risk awareness',
        title: 'Understand the risk of a change before you merge it',
        subtitle:
            'Blast Radius helps teams reason about the potential impact of code changes across services and repositories before those changes cause problems in production.',
        ctaPrimary: 'Discuss a real change (30 min)',

        problemTitle: 'The problem',
        problem: [
            'Engineers rarely see the full system impact of a change',
            'Dependencies are spread across services, repositories, and teams',
            'Small changes often lead to large and delayed incidents',
        ],

        solutionTitle: 'How we approach it',
        solution: [
            'Analyze proposed code changes in system context',
            'Surface services, APIs, and areas that may be affected',
            'Highlight potential risk before merge or release',
        ],

        callTitle: 'What happens on the call',
        callSteps: [
            'We take a real or hypothetical code change',
            'Walk through possible impact and risk areas',
            'Discuss where hidden dependencies usually appear',
            'Check whether this problem matches your system',
        ],
        callNote: 'No demo. No sales pitch. Just a focused discussion.',

        whoTitle: 'Who this is for',
        who: [
            'Teams working with multiple services',
            'Tech leads and staff engineers',
            'Engineering managers and CTOs',
        ],

        footerTitle: 'Early stage, real operational risk',
        footerText:
            'Blast Radius is an early-stage concept. I validate it by reviewing real code changes with engineering teams and learning where reasoning about change impact becomes difficult.',
        footerCta: 'Walk through a real example (30 min)',
    },
    ru: {
        tag: 'Осознание рисков изменений',
        title: 'Понимай риск изменений до их внедрения',
        subtitle:
            'Blast Radius помогает командам понять возможные последствия изменений в коде между сервисами и репозиториями до того, как они приведут к проблемам в продакшене.',
        ctaPrimary: 'Разобрать реальное изменение (30 мин)',

        problemTitle: 'Проблема',
        problem: [
            'Инженеры не понимают полное влияние изменений на систему',
            'Зависимости распределены между сервисами, репозиториями и командами',
            'Небольшие изменения часто приводят к крупным и отложенным инцидентам',
        ],

        solutionTitle: 'Как мы к этому подходим',
        solution: [
            'Рассматриваем изменения в контексте всей системы',
            'Подсвечиваем сервисы, API и зоны возможного влияния',
            'Помогаем заранее увидеть потенциальные риски',
        ],

        callTitle: 'Что происходит на созвоне',
        callSteps: [
            'Берем реальное или гипотетическое изменение',
            'Разбираем возможные последствия и зоны риска',
            'Обсуждаем, где чаще всего возникают скрытые зависимости',
            'Проверяем, насколько эта проблема актуальна для вашей системы',
        ],
        callNote: 'Без демо и без продажи. Только предметный разбор.',

        whoTitle: 'Для кого',
        who: [
            'Команды с несколькими сервисами',
            'Tech lead и staff инженеры',
            'Engineering managers и CTO',
        ],

        footerTitle: 'Ранняя стадия, реальный операционный риск',
        footerText:
            'Blast Radius находится на ранней стадии. Я валидирую идею, разбирая реальные изменения в коде вместе с командами и изучая, в каких местах возникает неопределенность и риск.',
        footerCta: 'Разобрать реальный пример (30 мин)',
    },
};

const LINKS = {
    calendar: 'https://calendly.com/m4xh17/30min',
    linkedin: 'https://www.linkedin.com/in/maxh1t',
};

export default function Page() {
    const [lang, setLang] = useState<'en' | 'ru'>('en');
    const t = copy[lang];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <main className="mx-auto max-w-5xl px-6 py-20">
                {/* Header */}
                <div className="mb-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                            <Network/>
                        </div>
                        <span className="text-sm text-slate-400">{t.tag}</span>
                    </div>

                    <button
                        onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
                        className="text-sm text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                        {lang === 'en' ? 'RU' : 'EN'}
                    </button>
                </div>

                {/* Hero */}
                <section className="mb-24">
                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        {t.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-400">
                        {t.subtitle}
                    </p>
                    <div className="mt-8">
                        <a
                            href={LINKS.calendar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white"
                        >
                            {t.ctaPrimary}
                        </a>
                    </div>
                </section>

                {/* Problem */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.problemTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.problem.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* Solution */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.solutionTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.solution.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* Call */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.callTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.callSteps.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                    <p className="mt-6 max-w-2xl text-slate-500 text-sm">
                        {t.callNote}
                    </p>
                </section>

                {/* Who */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.whoTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.who.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <section className="rounded-xl border border-slate-800 bg-slate-900 p-5 md:p-10">
                    <h2 className="mb-4 text-2xl font-semibold">
                        {t.footerTitle}
                    </h2>
                    <p className="mb-6 max-w-2xl text-slate-400">
                        {t.footerText}
                    </p>
                    <a
                        href={LINKS.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white"
                    >
                        {t.footerCta}
                    </a>
                </section>
            </main>

            <footer className="mt-24 border-t border-slate-800">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-slate-500">
                    <div>© {new Date().getFullYear()} Blast Radius</div>
                    <a
                        href={LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-200"
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}
