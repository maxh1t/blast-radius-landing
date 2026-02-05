'use client';
import {useState} from 'react';
import {Network} from 'lucide-react';

const copy = {
    en: {
        tag: 'Impact analysis for code changes',
        title: 'See the blast radius of the code change before you merge',
        subtitle:
            'Small changes often cause big incidents. Blast Radius helps teams understand what their changes will affect before they reach production.',
        ctaPrimary: 'Book a 30-min intro call',
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
        whoTitle: 'Who it’s for',
        who: [
            'Backend-heavy engineering teams',
            'Tech leads and staff engineers',
            'CTOs in growing systems',
        ],
        footerTitle: 'Early concept, real problem',
        footerText:
            'Blast Radius is an early-stage idea. I’m validating it with real teams to understand whether this solves a painful, real-world problem.',
        footerCta: 'Schedule a 30-min call',
    },
    ru: {
        tag: 'Анализ последствий изменений в коде',
        title: 'Понимай blast radius каждого изменения до merge',
        subtitle:
            'Маленькие изменения часто приводят к большим инцидентам. Blast Radius помогает понять, что именно затронет изменение до выхода в продакшен.',
        ctaPrimary: 'Созвон на 30 минут',
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
        whoTitle: 'Для кого',
        who: [
            'Backend-команды',
            'Tech lead и staff инженеры',
            'CTO в растущих системах',
        ],
        footerTitle: 'Ранняя стадия, реальная проблема',
        footerText:
            'Blast Radius — ранняя идея. Я валидирую её с реальными командами, чтобы понять, решает ли она действительно болезненную проблему.',
        footerCta: 'Созвон на 30 минут',
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
