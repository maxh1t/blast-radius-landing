'use client';

import { useState } from 'react';
import { Network } from 'lucide-react';

const copy = {
    en: {
        tag: 'Cross-service change impact',
        title: 'See the impact of a change before you merge',

        archivedNoticeTitle: 'Project status',
        archivedNoticeText: `This project is no longer active.

Over a few months I explored this idea, talked to engineers, and tried to validate it through direct sales.

The conclusion was clear: while the problem exists, it’s not a priority for teams right now.

Leaving this page up as a reference.`,

        subtitle:
            'Blast Radius analyzes API, schema and contract changes across repositories and highlights which services may be affected, directly inside your pull request.',

        problemTitle: 'The reality of growing systems',
        problem: [
            'Multiple services evolve independently',
            'Contracts change across repositories and teams',
            'Dependencies are not always obvious',
            'Small changes can cause delayed breakage',
        ],

        solutionTitle: 'What Blast Radius does',
        solution: [
            'Parses proposed changes in pull requests',
            'Detects API and schema modifications',
            'Surfaces potentially affected services and repositories',
            'Flags risky changes before merge',
        ],

        howItWorksTitle: 'How it works',
        howItWorks: [
            'Connect to your GitHub or GitLab repositories',
            'Analyze diffs in pull requests',
            'Map changes to related code across services',
            'Post impact summary as a PR comment',
        ],

        deploymentTitle: 'Deployment options',
        deployment: [
            'GitHub and GitLab compatible',
            'Self-hosted inside your infrastructure',
            'Read-only repository access',
        ],

        whoTitle: 'Who this is for',
        who: [
            'Teams working with multiple backend services',
            'Engineering leads managing legacy systems',
            'Projects with cross-repository dependencies',
        ],

        stageTitle: 'Context',
        stageText:
            'This concept was explored as part of an early-stage validation process. The focus was on understanding how teams handle cross-service changes and whether proactive impact detection is something they would adopt.',

        footerNote:
            'If this problem becomes relevant for your team in the future, feel free to reach out.',
    },

    ru: {
        tag: 'Анализ влияния изменений между сервисами',
        title: 'Понимай влияние изменений до их внедрения',

        archivedNoticeTitle: 'Статус проекта',
        archivedNoticeText: `Этот проект больше не развивается.

В течение нескольких месяцев я исследовал эту идею, общался с инженерами и пытался валидировать её через продажи.

Вывод оказался простой: проблема существует, но сейчас не является приоритетом для команд.

Оставляю эту страницу как референс.`,

        subtitle:
            'Blast Radius анализирует изменения API, схем и контрактов между репозиториями и показывает, какие сервисы могут быть затронуты прямо в pull request.',

        problemTitle: 'Как это выглядит в реальных системах',
        problem: [
            'Несколько сервисов развиваются независимо',
            'Контракты меняются между репозиториями и командами',
            'Зависимости не всегда очевидны',
            'Небольшие изменения приводят к отложенным поломкам',
        ],

        solutionTitle: 'Что делает Blast Radius',
        solution: [
            'Анализирует изменения в pull request',
            'Определяет изменения API и схем',
            'Подсвечивает потенциально затронутые сервисы',
            'Сигнализирует о рисках до их внедрения',
        ],

        howItWorksTitle: 'Как это работает',
        howItWorks: [
            'Подключается к GitHub или GitLab',
            'Анализирует изменения в pull request',
            'Связывает изменения с кодом в других сервисах',
            'Добавляет комментарий с обзором влияния',
        ],

        deploymentTitle: 'Развертывание',
        deployment: [
            'Поддержка GitHub и GitLab',
            'Можно развернуть внутри вашего контура',
            'Доступ только на чтение к репозиториям',
        ],

        whoTitle: 'Для кого',
        who: [
            'Команды с несколькими backend-сервисами',
            'Tech lead и архитекторы легаси-проектов',
            'Проекты с зависимостями между репозиториями',
        ],

        stageTitle: 'Контекст',
        stageText:
            'Эта идея исследовалась в рамках ранней валидации. Основной фокус был на том, как команды работают с межсервисными изменениями и готовы ли они использовать инструменты для оценки влияния заранее.',

        footerNote:
            'Если эта проблема станет актуальной для вашей команды, можно написать мне.',
    },
};

const LINKS = {
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
                            <Network />
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

                    {/* Archived notice */}
                    <div className="mt-6 max-w-2xl rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-400">
                        <p className="font-medium text-slate-200 mb-2">
                            {t.archivedNoticeTitle}
                        </p>
                        <p className="whitespace-pre-line">
                            {t.archivedNoticeText}
                        </p>
                    </div>

                    <p className="mt-6 max-w-2xl text-lg text-slate-400">
                        {t.subtitle}
                    </p>
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

                {/* How it works */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.howItWorksTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.howItWorks.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* Deployment */}
                <section className="mb-24">
                    <h2 className="mb-6 text-2xl font-semibold">
                        {t.deploymentTitle}
                    </h2>
                    <ul className="space-y-4 text-slate-400">
                        {t.deployment.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
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

                {/* Context */}
                <section className="rounded-xl border border-slate-800 bg-slate-900 p-5 md:p-10">
                    <h2 className="mb-4 text-2xl font-semibold">
                        {t.stageTitle}
                    </h2>
                    <p className="mb-4 max-w-2xl text-slate-400">
                        {t.stageText}
                    </p>
                    <p className="text-sm text-slate-500">{t.footerNote}</p>
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