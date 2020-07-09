<template>
	<b-navbar toggleable="lg" class="pt-4 pb-4">

		<!-- Логотип -->
		<g-link to="/">
			<g-image src="~/assets/images/cq_logo.svg" width="170" height="35" alt="dashly" />
		</g-link>

		<!-- Мобильное меню гамбургер -->
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-collapse is-nav id="nav_collapse">

			<!-- Выпадающее меню -->
			<b-navbar-nav class="ml-auto">
				<template v-for="( item , index ) in topMenu">

					<b-nav-item v-if="!item.subLinks" :href="item.to" :key="index" class="font-weight-bold mr-3">
						{{ item.title }}
					</b-nav-item>

					<b-nav-item-dropdown hover v-else-if="item.subLinks" :text="item.title" :key="index" class="font-weight-bold mr-3">
						<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.to" :key="index" class="font-weight-bold">
							{{ subLink.title }}
						</b-dropdown-item>
					</b-nav-item-dropdown>
					
				</template>
			</b-navbar-nav>

			<!-- Кнопки -->
			<b-button variant="primary" href="/panel/register/" class="ml-4 text-uppercase ml-6 mr-3">
				Зарегистрироваться
			</b-button>
			<b-button variant="outline" href="/panel/login/" class="text-uppercase">
				Войти
			</b-button>

		</b-collapse>

		<!-- Подложка -->
		<div class="blur"></div>

	</b-navbar>

</template>

<script>
	export default {
		data: () => ({
			topMenu: [
				{
					title: 'Инструменты',
					subLinks: [
						{
							title: 'Лид-бот',
							to: '/chatbot/'
						},
						{
							title: 'База знаний',
							to: '/knowledge-base/'
						},
						{
							title: 'eCRM',
							to: '/lead-manager'
						},
						{
							title: 'Онлайн-консультант',
							to: '/online-consultant/'
						},
						{
							title: 'Email-маркетинг',
							url: '/email-marketing'
						},
						{
							title: 'Pop-up окна',
							url: '/pop-up/'
						},
						{
							title: 'Web Push уведомления',
							url: '/web-push'
						},
						{
							title: 'Автоматизация воронки',
							url: '/automation-marketing'
						},
						{
							title: 'А/Б тесты автосообщений',
							url: '/ab-tests/'
						},
						{
							title: 'SDK для Android и iOS',
							url: '/sdk/'
						}
					]
				},
				{
					title: 'Решения',
					subLinks: [
						{
							title: 'Продуктовым компаниям и SAAS',
							to: '/saas'
						},
						{
							title: 'Интернет-магазинам и e‑commerce',
							to: '/ecommerce'
						},
						{
							title: 'Внедрение для крупных компаний',
							to: '/introduction-carrotquest'
						}
					]
				},
				{
					title: 'Тарифы',
					to: '/price/'
				},
				{
					title: 'Ресурсы',
					subLinks: [
						{
							title: 'Библиотека',
							to: '/library/'
						},
						{
							title: 'Кейсы',
							to: '/cases/'
						},
						{
							title: 'Гайды',
							to: '/academy/usecases'
						},
						{
							title: 'Вебинары',
							to: '/blog/webinars/'
						},
						{
							title: 'База знаний Carrot quest',
							to: 'https://help.carrotquest.io/'
						},
						{
							title: 'Интеграции',
							to: '/integration/'
						},
						{
							title: 'API разработчикам',
							to: '/developers/'
						}
					]
				},
				{
					title: 'Блог',
					to: '/blog/'
				},
				{
					title: 'Партнерам',
					to: '/partner/'
				}
			]
		}),
	}
</script>

<style lang="scss">
	.navbar {
		border-bottom: 1px solid #f3f3f3;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 100;

		a,
		ul,
		button,
		#nav_collapse {
			position: relative;
			z-index: 3
		}
		
		.blur {
			background-color: rgba(255, 255, 255, 0.97);
			backdrop-filter: blur(10px);
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
		}
	}
	
	.page {
		padding-top: 88px;
	}
</style>