'use client';
import {useState} from 'react';
import {Network} from 'lucide-react';

const copy = {
    en: {
        tag: 'Impact analysis for code changes',
        title: 'Understand what will break before you merge a change',
        subtitle:
            'Blast Radius helps you reason about the impact of a code change: which services, APIs, and flows may be affected, before it reaches production.',
        ctaPrimary: 'Discuss a real change (30 min)',
        ctaSecondary: 'Get early access',
        problemTitle: 'Why risky changes slip through code review',
        problem: [
            'Code reviews focus on code, not system-wide impact',
            'Dependencies are spread across services and repositories',
            'Most incidents start with small, innocent changes',
        ],
        solutionTitle: 'Understand impact before you merge',
        solution: [
            'Analyze code changes and diffs',
            'Highlight affected services, APIs and flows',
            'Surface risky changes and hidden dependencies early',
        ],
        callTitle: 'What happens on the call',
        callSteps: [
            'We take a real or hypothetical code change',
            'Walk through what it could affect and why',
            'Discuss where hidden dependencies usually appear',
            'Validate whether this problem is relevant for your system',
        ],
        callNote: 'No product demo. No sales pitch. Just a structured discussion.',
        whoTitle: 'Who it’s for',
        who: [
            'Backend-heavy engineering teams',
            'Tech leads and staff engineers',
            'CTOs in growing systems',
        ],
        footerTitle: 'Early concept, real problem',
        footerText:
            'Blast Radius is an early-stage concept. I’m validating it by walking through real code changes with engineering teams to understand where change impact becomes risky.',
        footerCta: 'Walk through a real example (30 min)',
    },
    ru: {
        tag: 'Анализ последствий изменений в коде',
        title: 'Понимай, что может сломаться до merge изменения',
        subtitle:
            'Blast Radius помогает разобраться в последствиях изменения: какие сервисы, API и флоу могут быть затронуты, до выхода в продакшен.',
        ctaPrimary: 'Разобрать реальное изменение (30 мин)',
        ctaSecondary: 'Ранний доступ',
        problemTitle: 'Почему рискованные изменения проходят code review',
        problem: [
            'Code review смотрит на код, а не на влияние на систему',
            'Зависимости размазаны по сервисам и репозиториям',
            'Большинство инцидентов начинается с безобидных изменений',
        ],
        solutionTitle: 'Понимай последствия до merge',
        solution: [
            'Анализ изменений и diff’ов',
            'Подсветка затронутых сервисов, API и флоу',
            'Раннее выявление рискованных изменений и скрытых зависимостей',
        ],
        callTitle: 'Что будет на созвоне',
        callSteps: [
            'Берём реальное или гипотетическое изменение в коде',
            'Разбираем, что и почему может быть затронуто',
            'Обсуждаем, где обычно прячутся скрытые зависимости',
            'Проверяем, актуальна ли эта проблема для вашей системы',
        ],
        callNote: 'Без демо продукта и без продажи. Только разбор и обсуждение.',
        whoTitle: 'Для кого',
        who: [
            'Backend-команды',
            'Tech lead и staff инженеры',
            'CTO в растущих системах',
        ],
        footerTitle: 'Ранняя стадия, реальная проблема',
        footerText:
            'Blast Radius — идея на ранней стадии. Я валидирую её, разбирая реальные изменения в коде вместе с командами и изучая, где именно возникают риски.',
        footerCta: 'Разбор реального примера (30 мин)',
    },
};

const LINKS = {
    calendar: 'https://calendly.com/m4xh17/30min',
    earlyAccess: 'mailto:m4xh17@gmail.com?subject=Blast Radius early access request',
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


                    <div className='flex items-center gap-3'>

                        <button
                            onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
                            className="text-sm text-slate-400 hover:text-slate-200 cursor-pointer"
                        >
                            {lang === 'en' ? 'RU' : 'EN'}
                        </button>
                    </div>

                </div>

                {/* Hero */}
                <section className="mb-24">
                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        {t.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-400">
                        {t.subtitle}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href={LINKS.calendar}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white">{t.ctaPrimary}</a>

                        <a
                            href={LINKS.earlyAccess}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-slate-800 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-900"
                        >
                            {t.ctaSecondary}
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

                {/* What happens on the call */}
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
                    <h2 className="mb-6 text-2xl font-semibold">{t.whoTitle}</h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.who.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <section
                    id="cta"
                    className="rounded-xl border border-slate-800 bg-slate-900 p-5 md:p-10"
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        {t.footerTitle}
                    </h2>

                    <p className="mb-6 max-w-2xl text-slate-400">
                        {t.footerText}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href={LINKS.calendar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white"
                        >
                            {t.footerCta}
                        </a>
                    </div>
                </section>

            </main>

            <footer className="mt-24 border-t border-slate-800">
                <div
                    className="flex justify-between gap-3 items-center mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
                    <div>
                        © {new Date().getFullYear()} Blast Radius
                    </div>


                    <a
                        href={LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit text-sm hover:text-slate-200"
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}
