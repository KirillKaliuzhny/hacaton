<script setup>

    definePageMeta({
        middleware: ['teams'],
        layout: 'default'
    })

    const clicker = (event) => {
        let currentEl = event.target;
        while (!currentEl.classList.contains('person-header')) {
            currentEl = currentEl.parentNode;
        }
        const items = document.querySelectorAll('.person-header.active');
        if (!items.length) {
            currentEl.classList.add('active');
            return;
        }
        if (items.length === 1 && currentEl.dataset.id == items[0].dataset.id) {
            currentEl.classList.remove('active');
            return;
        }
        items.forEach(element => {
            element.classList.remove('active')
        });
        currentEl.classList.add('active');
    }

</script>

<template>
    <section class="banner">
        <div class="container">
            <div class="banner__body">
                <div class="banner__img">
                   <picture>
                       <img src="@/assets/img/banner.png" alt="banner">
                   </picture>
                </div>
                <div class="banner__team">
                   <p class="banner-title font-inter">
                       ( название )
                   </p>
                   <h1 class="banner-name font-getvoip">
                       API'шный латте
                   </h1>
                </div>
            </div>    
        </div>
    </section> 
    <section class="team">
        <div class="teams__block">
            <div class="container">
                <h2 class="team-title font-getvoip">
                    Состав команды
                </h2>
                <ul class="team__list">
                    <li v-for="(index, item) of 2" :key="item" class="team-item person">
                        <div class="person-header font-inter" :data-id="index" @click="clicker">
                            <div class="person__data">
                                <h3 class="person-name">
                                    Казанцева Алина Дмитриевна
                                </h3>
                                <h4 class="person-job">
                                    ( ux/ui дизайнер )
                                </h4>
                            </div>
                            <div class="person-galina">
                                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.5L9.5 10.5L2 2.5" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="person__content">
                            <div class="person__img">
                                <picture>
                                    <img src="@/assets/img/logo.png" alt="logo">
                                </picture>
                            </div>
                            <div class="person__info">
                                <h2 class="person__title font-getvoip">
                                    Казанцева Алина Дмитриевна
                                </h2>
                                <div class="person__body">
                                    <p class="person__job">
                                        ( ux/ui дизайнер )
                                    </p>
                                    <ul class="person__list stack font-inter">
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                стек технологий:
                                            </p>
                                            <p class="stack__result">
                                                Figma
                                            </p>
                                        </li>
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                оценка своего участия в данном кейсе:
                                            </p>
                                            <p class="stack__result">
                                                5/5
                                            </p>
                                        </li>
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                Сложности реализации:
                                            </p>
                                            <p class="stack__result">
                                                выбрать стилистику проекта
                                            </p>
                                        </li>
                                    </ul>
                                    <p class="person__description font-inter">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a bibendum erat. Vestibulum quis egestas erat, in rhoncus eros. Sed malesuada urna odio, ac sagittis leo elementum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="team-item person">
                        <div class="person-header font-inter" :data-id="index" @click="clicker">
                            <div class="person__data">
                                <h3 class="person-name">
                                    Казанцева Алина Дмитриевна
                                </h3>
                                <h4 class="person-job">
                                    ( ux/ui дизайнер )
                                </h4>
                            </div>
                            <div class="person-galina">
                                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.5L9.5 10.5L2 2.5" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="person__content">
                            <div class="person__img">
                                <picture>
                                    <img src="@/assets/img/banner.png" alt="logo">
                                </picture>
                            </div>
                            <div class="person__info">
                                <h2 class="person__title font-getvoip">
                                    Казанцева Алина Дмитриевна
                                </h2>
                                <div class="person__body">
                                    <p class="person__job">
                                        ( ux/ui дизайнер )
                                    </p>
                                    <ul class="person__list stack font-inter">
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                стек технологий:
                                            </p>
                                            <p class="stack__result">
                                                Figma
                                            </p>
                                        </li>
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                оценка своего участия в данном кейсе:
                                            </p>
                                            <p class="stack__result">
                                                5/5
                                            </p>
                                        </li>
                                        <li class="stack__item">
                                            <p class="stack-name">
                                                Сложности реализации:
                                            </p>
                                            <p class="stack__result">
                                                выбрать стилистику проекта
                                            </p>
                                        </li>
                                    </ul>
                                    <p class="person__description font-inter">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a bibendum erat. Vestibulum quis egestas erat, in rhoncus eros. Sed malesuada urna odio, ac sagittis leo elementum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="team-item">
                        <button class="team-admin font-inter secondary-btn">
                            Добавить участника
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template> 

<style scoped>
    .banner .container {
        padding: 0;
    }
    .banner__body {
        display: grid;
        grid-template-rows: repeat(2, 326px);
        margin-bottom: 60px;
        justify-content: center;
    }
    .banner__body > div {
        border-radius: 24px;
        max-width: 480px;
    }
    .banner__img {
        position: relative;
    }
    .banner__img img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
    }
    .banner__team {
        background: var(--color-black);
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .banner-title {
        align-self: flex-end;
        margin-right: 8px;
        font-size: 14px;
        font-weight: 500;
        font-style: italic;
        color: var(--color-orange);
    }
    .banner-name {
        font-weight: 700;
        font-size: 62px;
        line-height: 62px;
        letter-spacing: -1.2px;
        text-transform: uppercase;
        color: var(--color-white);
    }
    .team {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 48px;
    }
    .teams__block .container {
        padding: 0;
        max-width: 480px;
    }
    .team-item {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .team-title {
        font-weight: 700;
        font-size: 52px;
        line-height: 41px;
        letter-spacing: -1px;
        text-transform: uppercase;
        color: var(--color-white);
        text-shadow:  
            1px 0 1px var(--color-black), 
            0 1px 1px var(--color-black), 
            -1px 0 1px var(--color-black), 
            0 -1px 1px var(--color-black);
    }
    .person-header {
        border-radius: 16px;
        border: 1px solid var(--color-black);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    .person__content {
        display: none;
    }
    .person-header.active ~ .person__content {
        display: block;
    }
    .person__data {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .person-name {
        font-weight: 500;
        font-size: 1rem;
        line-height: 14px;
        color: var(--color-black);
    }
    .person-job {
        font-style: italic;
        font-size: 14px;
        font-weight: 500;
        line-height: 12px;
        color: var(--color-grey);
    }
    
    .person-galina {
        transform: rotate(0);
        transition: .2s;
    }
    .person-galina svg path {
        stroke: var(--color-grey);
    }
    .person-header.active .person-galina {
        transform: rotate(180deg);
    }
    .person-header.active svg path {
        stroke: var(--color-orange);
    }
    
    .person__img {
        border-radius: 24px;
        margin-bottom: 20px;
        height: 370px;
        position: relative;
    }
    .person__img img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 24px;
    }
    .person__info {
        padding: 0 16px;
    }
    .person__title {
        font-weight: 700;
        font-size: 32px;
        line-height: 29px;
        margin-bottom: 12px;
        color: var(--color-black);
    }
    .person__job {
        font-weight: 500;
        font-style: italic;
        font-size: 18px;
        line-height: 22px;
        color: var(--color-black);
        margin-bottom: 16px;
    }
    .person__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
    }
    .stack__item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .stack-name {
        color: var(--color-grey);
        font-weight: 500;
        font-size: 1rem;
        line-height: 19px;
    }
    .stack__result {
        text-align: right;
        color: var(--color-black);
        font-weight: 600;
        font-size: 1rem;
        line-height: 19px;
    }
    .team-item {
        margin-top: 20px;
    }
    .team-admin {
        border: 2px solid var(--color-orange);
        color: var(--color-orange);
        border-radius: 14px;
        padding: 20px 26px 20px 26px;
        background: transparent;
        font-weight: 500;
        font-size: 1rem;
    }
    @media (min-width: 768px) {
        .banner__body {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            gap: 20px;
        }
        .banner__body > div {
            max-width: 100%;
            height: calc(var(--sizer) * 16);
        }
    }
    @media (min-width: 980px) {
        .teams__block .container {
            position: relative;
            padding: 0 16px;
            max-width: 1808px;
        }
        .team__list {
            position: relative;
            max-width: 320px;
        }
        .person-header.active ~ .person__content {
            position: absolute;
            top: 0;
            left: calc(100% + 20px);
            display: grid;
            grid-template-columns: 320px 1fr;
            grid-template-rows: 340px;
            width: calc(100vw - 365px);
        }
        .person__img {
            height: 100%;
        }
        .person__body {
            width: 100%;
            max-width: 320px;
        }
    }
    @media (min-width: 1440px) {
        .banner__body {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 620px;
        }
        .banner__body > div {
            border-radius: 24px;
            max-width: 100%;
            height: 100%;
        }
        .banner-name {
            font-size: 82px;
            line-height: 82px;
            letter-spacing: -2px;
        }
        .team {
            margin-bottom: 106px;
        }
        .team-title {
            font-size: 90px;
            letter-spacing: -3px;
            margin-bottom: 32px;
        }
        .team__list {
            max-width: 445px;
        }
        .team-item {
            position: initial;
        }
        .person-header.active ~ .person__content {
            grid-template-columns: 445px 1fr;
            grid-template-rows: 415px;
            width: calc(100vw - 500px);
        }
        .person__body {
            max-width: 445px;
        }
        .person-header.active .person-galina {
            transform: rotate(-90deg);
        }
        .person__title {
            font-size: 40px;
        }
        .person__job {
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
</style>