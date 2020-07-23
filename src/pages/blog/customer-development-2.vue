<template>
	<Layout class="post">
		<!-- Прогрес бар чтения -->
		<ClientOnly>
		<read-progress color="#717171" height="2px" :shadow="false"></read-progress>
		</ClientOnly>

		<!-- Изображение записи -->
		<b-row>
		<b-col class="post__categories mb-4 d-none d-lg-flex">
			<b-nav class="navbar-right">
			<b-nav-item href="/blog/kejsy/">Кейсы</b-nav-item>
			<b-nav-item href="/blog/konversiya/">Конверсия</b-nav-item>
			<b-nav-item href="/blog/automation/">Автоматизация</b-nav-item>
			<b-nav-item href="/blog/support/">Поддержка</b-nav-item>
			<b-nav-item href="/blog/analytics/">Аналитика</b-nav-item>
			<b-nav-item href="/blog/new/">Обновления</b-nav-item>
			<b-nav-item href="/blog/academy/" active>Академия</b-nav-item>
			<b-nav-item href="/blog/world/">Мир</b-nav-item>
			</b-nav>
		</b-col>
		</b-row>

		<b-row>
		<b-col col xl="10" offset-xl="1" class="order-2 order-md-1 mb-5">
			<div class="post__about">
			<!-- Хлебные крошки -->
			<b-breadcrumb class="font12px mb-3 d-none d-md-flex">
				<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
				<b-breadcrumb-item href="/blog/">Блог</b-breadcrumb-item>
				<b-breadcrumb-item active>Customer Development или как протестировать идею фичи за 2 дня</b-breadcrumb-item>
			</b-breadcrumb>

			<!-- Заголовок -->
			<h1 class="mb-3">Customer Development или как протестировать идею фичи за 2 дня</h1>

			<!-- Информация -->
			<div class="post__about__info font14px grey-text">
				<span class="date">20 мая, 2020</span>
				|
				<span class="time">Время чтения: 10 мин.</span>
			</div>
			</div>
		</b-col>

		<!-- Изображение записи -->
		<b-col col cols="12" class="post__image mb-4 mb-md-4 order-1 order-md-2">
			<g-image
			src="~/assets/images/article/Фичи-min.jpg"
			class="d-none d-md-block"
			width="1100"
			alt="Customer Development или как протестировать идею фичи за 2 дня"
			/>
			<g-image
			src="~/assets/images/article/Фичи-min.jpg"
			class="d-md-none"
			width="500"
			height="500"
			alt="Customer Development или как протестировать идею фичи за 2 дня"
			/>
		</b-col>
		</b-row>

		<!-- Текст статьи -->
		<b-row class="font17px post__content">
			<b-col class="post__text">

				<div class="post__creators post__text__rightbox d-none d-lg-block mt-5">
					<div class="mb-5">
						<g-image src="~/assets/images/article/lera.png" alt="Валерия Попкова" />
						<p>
						<b>Рассказала</b>
						</p>
						<p>Валерия Попкова</p>
						<p class="font14px grey-text">Growth Marketing, Dashly.io</p>
					</div>
					<div class="mb-5">
						<g-image src="~/assets/images/article/masha.png" alt="Мария Бурдина" />
						<p>
						<b>Записала</b>
						</p>
						<p>Мария Бурдина</p>
						<p class="font14px grey-text">Редактор блога</p>
					</div>
					<div class="mb-5">
						<g-image src="~/assets/images/article/olya.png" alt="Оля Кузеванова" />
						<p>
						<b>Нарисовала</b>
						</p>
						<p>Оля Кузеванова</p>
						<p class="font14px grey-text">Иллюстратор</p>
					</div>
				</div>

				<h3 id="toc-menu">Содержание:</h3>
				<ul>
					<li>
						<a href="#chto-takoe-customer-development">Что такое Customer Development</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#zachem-nuzhen-customer-development-i-kak-ego-rezultaty-rabotayut-na-pr"
						>Зачем нужен Customer Development и&nbsp;как его результаты работают на&nbsp;практике</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#instrumenty-customer-development"
						>Инструменты Customer Development</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#etapy-issledovaniya-i-neobhodimye-shagi"
						>Этапы исследования и&nbsp;необходимые шаги</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#kak-sostavit-gajd-s-voprosami-nbsp"
						>Как составить гайд с&nbsp;вопросами</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-najti-respondentov">Как найти респондентов</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#kak-kvalifitsirovat-respondentov"
						>Как квалифицировать респондентов</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-segmentirovat-respondentov">Как сегментировать респондентов</a>
					</li>
					<li>
						<a
						rel="nofollow"
						href="#kak-rasschitat-vremya-na-issledovanie-segmenta-kanala"
						>Как рассчитать время на&nbsp;исследование сегмента/канала</a>
					</li>
				</ul>
				<p>
				Продуктовые команды постоянно придумывают новые фичи, на&nbsp;их&nbsp;разработку тратятся месяцы и&nbsp;сотни тысяч рублей, но
				пользователи в&nbsp;них плохо активируются. У&nbsp;продуктовых лендингов трагически низкая конверсия. Целевой сегмент не
				готов покупать продукт. Больно? Очень.
				</p>
				<p>
				Нам хорошо знакомы эти проблемы, но&nbsp;мы&nbsp;научились с&nbsp;ними справляться с&nbsp;помощью регулярных исследований
				пользователей. Используя методы Customer Development, мы&nbsp;провели сотни интервью. Только 80&nbsp;из&nbsp;них провела
				команда нашего американского продукта
				<a
					href="http://dashly.io"
					target="_blank"
				>Dashly</a> за&nbsp;одно лето в&nbsp;акселераторе
				<a
					rel="noreferrer noopener"
					href="http://iidf.ru"
					target="_blank"
				>ФРИИ</a>.
				</p>
				<p>В&nbsp;этой статье мы&nbsp;расскажем, как с&nbsp;помощью методов и&nbsp;инструментов Customer Development мы&nbsp;тестируем:</p>
				<ul>
				<li>позиционирование основного продукта и&nbsp;ключевых фичей,</li>
				<li>каналы коммуникации,</li>
				<li>сегменты пользователей.</li>
				</ul>

				<h2 id="chto-takoe-customer-development">Что такое Customer Development</h2>
				<div class="post__text__rightbox font14px grey-text">
					<g-image
						src="~/assets/images/article/smile_think.png"
						width="59"
						height="74"
						alt="smile_think"
					/>
					<p>
						<b>Customer Development</b>&nbsp;&mdash; это быстрое тестирование идей продуктов/фичей с&nbsp;помощью серий глубинных интервью с&nbsp;потенциальными пользователями.
					</p>
				</div>
				<p>Недавно во&nbsp;время хакатона одна из&nbsp;команд работала над валидацией идеи нашей новой фичи. За&nbsp;2&nbsp;дня ребята:</p>
				<ul>
				<li>поговорили с&nbsp;десятком контент-маркетологов,</li>
				<li>нашли их&nbsp;главную боль, связанную с&nbsp;лидогенерацией,</li>
				<li>придумали решение,</li>
				<li>разработали MVP,</li>
				<li>провалидировали его.</li>
				</ul>
				<p>Фича пошла в&nbsp;разработку. У&nbsp;нас уже есть клиенты, которые ждут ее&nbsp;релиза.</p>
				<p>
				В&nbsp;классическом понимании Customer Development, как его задумал автор понятия Стив Бланк,&nbsp;&mdash; методология создания
				новых продуктов, описывающая весь путь стартапа. Она включает в&nbsp;себя много всего: от&nbsp;глубинных интервью до&nbsp;А/Б
				тестов и&nbsp;проработки каналов продаж.
				</p>
				<p>
				Одна из&nbsp;частей Customer Development&nbsp;&mdash; быстрый метод исследования пользователей, который требует мало ресурсов.
				Цикл такого исследования составляет месяц, для небольшой фичи может не&nbsp;превышать недели и&nbsp;даже пары дней.
				Понадобится 1-2&nbsp;человека.
				</p>
				<p>
				Customer Development обычно применяют при запуске новых продуктов. Методы Customer Development легко адаптировать
				и&nbsp;под другие задачи, которые возникают на&nbsp;разных этапах развития компании. С&nbsp;его помощью:
				</p>
				<ul>
				<li>проверяют позиционирование продукта и&nbsp;фичей;</li>
				<li>изучают каналы коммуникации;</li>
				<li>ищут новые сегменты пользователей.</li>
				</ul>
				<h2 id="zachem-nuzhen-customer-development-i-kak-ego-rezultaty-rabotayut-na-pr">
				Зачем нужен Customer Development и
				как его результаты работают на&nbsp;практике
				</h2>
				<p>
					Кастдевы&nbsp;&mdash; это инструмент, который помогает нам избегать наших галлюцинаций и&nbsp;видеть реальную картину
					мира. Мы&nbsp;можем придумать что угодно, а&nbsp;в&nbsp;реальности все может быть совсем не&nbsp;так. Нужно идти и
					валидировать идею, которая у&nbsp;нас появилась.
				</p>
				<figure class="wp-block-image alignwide">
				<g-image
					src="~/assets/images/article/Дэшли главная 1.png"
					alt="Главная страница сайта Dashly до исследования пользователей"
				/>
				<figcaption>
					<em>Главная страница сайта Dashly до&nbsp;исследования пользователей</em>
				</figcaption>
				</figure>
				<figure class="wp-block-image alignwide size-large">
				<g-image
					src="~/assets/images/article/Дэшли-главная-2-1050x481.png"
					alt="Главная страница сайта Dashly после исследования пользователей"
				/>
				<figcaption>
					<em>Главная страница сайта Dashly после исследования пользователей</em>
				</figcaption>
				</figure>
				<p>Результаты кастдевов идут прямиком в&nbsp;продукт, маркетинг и&nbsp;продажи. От&nbsp;данных кастдева зависит:</p>
				<ul>
				<li>как мы&nbsp;будем рассказывать о&nbsp;фиче в&nbsp;блоге, в&nbsp;рассылке и&nbsp;непосредственно клиентам во&nbsp;время демо;</li>
				<li>что напишем на&nbsp;лендинге;</li>
				<li>кому будем предлагать попробовать фичу;</li>
				<li>какие каналы будем использовать для коммуникации с&nbsp;потенциальными пользователями этой фичи;</li>
				<li>какие показывать юзкейсы.</li>
				</ul>

				<figure class="wp-block-image alignwide">
				<g-image
					src="~/assets/images/article/Кикофф чат-бота.png"
					alt="Kick off фичи, созданный на основе исследования пользователей и конкурентов"
				/>
				<figcaption>
					<em>Kick off фичи, созданный на&nbsp;основе исследования пользователей и&nbsp;конкурентов</em>
				</figcaption>
				</figure>
				<figure class="wp-block-image alignwide">
				<g-image
					src="~/assets/images/article/Чат-бот юзкейсы из кикоффа.png"
					alt="Описание юзкейсов и целевой аудитории в kick off чат-бота"
				/>
				<figcaption>
					<em>Описание юзкейсов и&nbsp;целевой аудитории в&nbsp;kick off чат-бота</em>
				</figcaption>
				</figure>
				<p>На&nbsp;основе Customer Development и&nbsp;других исследований пользователей мы&nbsp;оставляем так называемый kick off фичи.</p>
				<p>Kick off описывает:</p>
				<ul>
				<li>проблему, которую решает фича,</li>
				<li>решение,</li>
				<li>юзкейсы,</li>
				<li>сегмент,</li>
				<li>последовательность релиза</li>
				<li>и&nbsp;другие важные вещи.</li>
				</ul>
				<p>Процесс продаж тоже зависит от&nbsp;кастдевов.</p>


				<div id="quote_647634473" class="post__quote my-5">
					<b-row>
						<b-col cols="6" md="4" lg="4" class="post__quote__photo mb-4 mb-md-0">
							<g-image
								src="~/assets/images/article/lera.png"
								width="260"
								class="photo"
								alt="Валерия Попкова"
							/>
							<g-image
								src="~/assets/images/article/smash.png"
								width="100"
								class="smash"
								alt="Всплеск"
							/>
						</b-col>
						<b-col cols="12" md="8" lg="8" class="py-lg-3">	
							<p>
								«Менеджер по&nbsp;продажам должен во&nbsp;время демо задавать правильные вопросы, чтобы предлагать нужное решение,
								понимать, что входит в&nbsp;зону ответственности того или иного человека, как могут быть устроены процессы в
								компании потенциального клиента».
							</p>
							<p class="author__meta">
								<b>Валерия Попкова</b>
								<br>
								<span class="font14px grey-text">
									Growth Marketing, Dashly.io
								</span>
							</p>
						</b-col>
					</b-row>
				</div>


				<p>Опыт исследования пользователей дает менеджерам нужный для этого бэкграунд.</p>
				<p>Результаты Customer Development непосредственно в&nbsp;своей работе используют:</p>
				<ul>
				<li>команда продукта,</li>
				<li>продакт-маркетинг,</li>
				<li>маркетинговая команда,</li>
				<li>контентная команда,</li>
				<li>команда продаж.</li>
				</ul>
				<h2 id="instrumenty-customer-development">Инструменты Customer Development</h2>


				<div class="post__text__rightbox d-none d-lg-block">
					<p><b>Читайте также:</b></p>
					<a 
						href="/blog/product-strategy/"
						target="_blank"
					>
						<g-image
							src="~/assets/images/article/article.png"
							width="260"
							height="140"
							alt="Думать медленно, решать быстро: как разработать продуктовую стратегию в условиях неопределённости"
							class="post__text__rightbox__cover mb-2"
						/>
						<span class="font14px">
							Думать медленно, решать быстро: как разработать продуктовую стратегию в&nbsp;условиях неопределённости
						</span>
					</a>
					
				</div>


				<p>
				Основной инструмент Customer Development&nbsp;&mdash; глубинные интервью. В&nbsp;рамках этого подхода интервью бывают двух
				видов:
				</p>
				<h4>
					Проблемные интервью
				</h4>
				<p>Цель таких интервью&nbsp;&mdash; проверить гипотезу и&nbsp;узнать о&nbsp;неочевидных проблемах пользователей.</p>
				
				
				
				<div class="post__text__leftbox">
					<g-image
						src="~/assets/images/article/click.png"
						width="59"
						height="57"
						alt="click"
					/>
					<p>
						<em><b>Пример гипотезы:</b> 
						<br> 
						«Нужно продвигать Dashly среди автодилеров и&nbsp;агентств недвижимости».</em>
					</p>
				</div>
				
				<p>
				
				</p>
				
				<p>
				Она не
				подтвердилась, и&nbsp;мы&nbsp;смогли быстро пойти дальше&nbsp;&mdash; искать другие сегменты.
				</p>
				<h4>Решенческие интервью</h4>
				<p>
				Цель решенческих интервью&nbsp;&mdash; протестировать решение или прототип продукта на&nbsp;реальных пользователях и&nbsp;дополнить
				видение проблем, связанных с&nbsp;продуктом. Для проведения такого интервью понадобится MVP, то&nbsp;есть минимально
				жизнеспособный продукт.
				</p>
				<p>
				Не&nbsp;путайте решенческое интервью с&nbsp;
				<a
					href="https://www.carrotquest.io/blog/hallway-usability-testing/"
					target="_blank"
				>коридорным тестом</a>. В&nbsp;ходе коридорного теста проверяется
				интерфейс, в&nbsp;ходе решенческого интервью&nbsp;&mdash; само решение, его ценность.
				</p>



				<h2 id="etapy-issledovaniya-i-neobhodimye-shagi">Этапы исследования и&nbsp;необходимые шаги</h2>
				<div class="post__text__rightbox font14px grey-text">
					<g-image
						src="~/assets/images/article/like.png"
						width="61"
						height="61"
						alt="like"
					/>
					<p>
						Поскольку мы&nbsp;не&nbsp;столько тестируем продукт, сколько каналы продвижения и&nbsp;выбираем сегменты, в&nbsp;которых будем продвигать продукт в&nbsp;ближайшее время, то&nbsp;проводим преимущественно проблемные интервью. А&nbsp;решенческие интервью совмещаем с&nbsp;демо продукта.
					</p>
				</div>
				<p>
				Если вы&nbsp;планируете Customer Development полного цикла для нового продукта или фичи&nbsp;&mdash; исследование будет
				разбиваться на&nbsp;две части: до&nbsp;и&nbsp;после появления MVP. В&nbsp;первой части исследования вы&nbsp;будете проводить проблемные
				интервью, во&nbsp;второй&nbsp;&mdash; решенческие.
				</p>
				<p>Шаги для первой части исследования:</p>
				<ol>
				<li>Формулируем гипотезу.</li>
				<li>Выбираем сегмент для проверки гипотезы.</li>
				<li>Составляем гайд с&nbsp;вопросами для интервью и&nbsp;квалифицирующими вопросами для отсева респондентов.</li>
				<li>Находим подходящих респондентов, квалифицируем их&nbsp;и&nbsp;при необходимости фильтруем. Договариваемся об&nbsp;интервью.</li>
				<li>Проводим интервью, по&nbsp;ходу интервью или сразу после фиксируем основные инсайты.</li>
				</ol>
				
				
				


				<div class="post__text__leftbox">
					<g-image
						src="~/assets/images/article/click.png"
						width="59"
						height="57"
						alt="click"
					/>
					<p>
						<em>
							<b>Пример:</b> 
							<br>
							В&nbsp;прошлом году команда Dashly провела большое исследование сектора SaaS. Инсайты, полученные в&nbsp;ходе этого
							исследования, проверяли в&nbsp;ходе демо для потенциальных клиентов из&nbsp;этого сектора. Тогда мы&nbsp;узнали, что многие
							чаты не&nbsp;переходят в&nbsp;режим офлайн, из-за чего операторам приходится отвечать на&nbsp;обращения в&nbsp;поддержку с&nbsp;телефона
							до&nbsp;поздней ночи. Наш чат умеет это делать&nbsp;&mdash; это помогло нам убедить нескольких клиентов подключить Dashly.
						</em>
					</p>
				</div>



				<div id="quote_1744209973" class="post__quote post__quote__text my-5">
					<g-image
						src="~/assets/images/article/quotes.svg"
						alt="quotes"
						width="55"
					/>
					<p>
						Кастдев&nbsp;&mdash; это обходной диалог с&nbsp;потенциальными покупателями: купят тебя или нет, нужен ты&nbsp;или нет, если
						нужен&nbsp;&mdash; то&nbsp;почему, как, в&nbsp;какой момент, кому нужен из&nbsp;команды.
					</p>
					<b>Валерия Попкова</b>
					<br>
					<span class="font14px grey-text">
						Growth Marketing, Dashly.io
					</span>
				</div>

				<h2 id="kak-sostavit-gajd-s-voprosami-nbsp">Как составить гайд с&nbsp;вопросами</h2>
				<p>Есть несколько правил, которые помогут сформулировать вопросы для проблемного интервью:</p>
				<div class="wp-block-image">
					<figure class="aligncenter size-large">
						<g-image
							src="~/assets/images/article/Правила-составления-вопросов-для-интервью.png"
							alt="Как составить гайд с вопросами "
						/>
					</figure>
				</div>


				<div class="post__text__rightbox font14px grey-text">
					<g-image
						src="~/assets/images/article/like.png"
						width="61"
						height="61"
						alt="like"
					/>
					<p>
						Если вы&nbsp;планируете проводить серийные исследования, достаточно разработать универсальный гайд, которым будут пользоваться все команды.
					</p>
				</div>

				<p>
					Если вы&nbsp;хотите научиться задавать пользователям правильные вопросы, обязательно прочитайте книгу Роба Фицпатрика
					&laquo;Спроси маму&raquo;. Это самое лучшее практическое руководство для общения с&nbsp;потенциальными клиентами из&nbsp;написанных.
					Потом как можно больше практикуйтесь в&nbsp;проведении интервью. На&nbsp;всякий случай можете еще почитать
					<a
						href="https://www.carrotquest.io/blog/product-research"
						target="_blank"
					>
						подробное руководство по&nbsp;продуктовым исследованиям</a> 
						и статью о&nbsp;том, как
					<a
						href="https://www.carrotquest.io/blog/why-user-interview-fail/"
						target="_blank"
					>не&nbsp;провалить интервью с&nbsp;пользователем.</a>
				</p>
				
				<p>Так, команде Dashly, удалось составить такой гайд с&nbsp;вопросами для кастдева, которым мы&nbsp;пользуемся уже год.</p>



				
				<div id="lidform-universal_504732347" class="post__lidform row align-items-center my-5 pt-5 pt-md-3 pb-5">
					<b-col cols="12" md="7" lg="5" class="d-none d-md-block">
						<g-image
							src="~/assets/images/article/leadform.png"
							alt="leadform"
						/>
					</b-col>
					<b-col cols="12" lg="7">
						<div class="h3 mb-4">
							Псс, надо гайд с&nbsp;вопросами и&nbsp;шаблон для хранения данных из&nbsp;интервью?
						</div>
						<form id="form-begin_504732347" v-on:submit.prevent="onSubmit" v-if="!formSubmit">
							<input required type="email" v-model="email" placeholder="Email" class="form__email py-2 px-3" />
							<input value="Скачать" type="submit" class="form__button py-2 px-3" />
						</form>
						<p v-if="formSubmit">Спасибо! Мы&nbsp;уже отправили всё на&nbsp;почту</p>
					</b-col>
				</div>



				<h2 id="kak-najti-respondentov">Как найти респондентов</h2>
				<figure class="wp-block-image size-large">
				<g-image
					src="~/assets/images/article/Запросы-на-HARO.png"
					alt="54 питча под нашим вопросом про судьбы eCom во время пандемии COVID-19"
				/>
				<figcaption>
					<em>54 (!) питча под нашим вопросом про судьбы eCom во&nbsp;время пандемии COVID-19</em>
				</figcaption>
				</figure>
				<p>Время на&nbsp;поиск респондентов зависит от&nbsp;размера сегмента:</p>
				<ul>
				<li>
					Если сегмент широкий&nbsp;&mdash; например, вы&nbsp;изучаете в&nbsp;целом сектор eCom&nbsp;&mdash; времени потребуется минимум. Достаточно
					будет нескольких постов в&nbsp;Facebook.
				</li>
				</ul>
				<ul>
				<li>
					Если сегмент узкий&nbsp;&mdash; например, eCom c&nbsp;поддержкой в&nbsp;чате, в&nbsp;том числе в&nbsp;мобильном приложении, с&nbsp;командой
					поддержки больше 30&nbsp;человек, использующие конкурирующий сервис с&nbsp;тарифом Enterprise,&nbsp;&mdash; придется потратить
					больше времени и&nbsp;проявить изобретательность для поиска неочевидных каналов, где можно найти нужных вам
					людей.
				</li>
				</ul>
				<p>Для поиска таких респондентов мы&nbsp;пользуемся:</p>

				<h4>
					Нетворкингом и&nbsp;имеющимися контактами в&nbsp;разных компаниях
				</h4>			

				<p>
				Бывает так, что мы&nbsp;точно знаем, к&nbsp;кому можно обратиться и&nbsp;с&nbsp;кем стоит поговорить. Или у&nbsp;нас есть контакты в
				компании и&nbsp;мы&nbsp;можем попросить связать нас с&nbsp;человеком из&nbsp;нужной команды.
				</p>

				
				<div class="post__text__rightbox">
					<a href="/online-consultant/" target="_blank">
						<g-image
							src="~/assets/images/article/windows.png"
							width="160"
							alt="windows"
							style="margin-right: 2rem"
						/>
					</a>
					<p class="h2">
						Попробуйте <a href="/online-consultant/" target="_blank">онлайн-чат</a> Carrot quest
					</p>
				</div>



				<h4>
					Telegram-каналами
				</h4>
				
						
				<p>
					<a
					href="https://courses.uncrn.me/tg?invite=CFbMKlHA_QjMviIxedQ8bA"
					>[UNCRN.me] Коридорки и&nbsp;кастдев</a>,
					<a href="https://ttttt.me/productperm">Perm Product People</a>,
					<a href="https://t-do.ru/epicgrowth_chat">Epic Growth Chat</a>,
					<a href="https://t-do.ru/productsense_chat">
					ProductSense Chat
					<br />
					</a>
				</p>
				<p>Во&nbsp;многом, это тоже история про нетворкинг. Профессиональные сообщества&nbsp;&mdash; прекрасный источник респондентов.</p>
				<h4>
					Сообществами в&nbsp;Slack
				</h4>
				<p>
				У&nbsp;них есть важное преимущество перед группами в&nbsp;Facebook&nbsp;&mdash; поиск сообщений по&nbsp;ключевым словам. То&nbsp;есть можно
				посмотреть сообщения, затрагивающие проблему, которую вы&nbsp;исследуете. Дальше можно связаться с&nbsp;автором сообщения,
				уточнить ситуацию и&nbsp;суть проблемы и&nbsp;спросить, готов&nbsp;ли он&nbsp;поговорить об&nbsp;этом подробнее в&nbsp;ходе интервью. Как
				правило, авторы таких сообщений легко соглашаются на&nbsp;разговор.
				</p>
				<figure class="wp-block-image alignwide size-large">
				<g-image
					src="~/assets/images/article/Запросы-на-HARO.png"
					alt="письмо-с-приглашением-на-интервью"
				/>
				<figcaption>
					<em>Письмо с&nbsp;приглашением на&nbsp;интервью</em>
				</figcaption>
				</figure>
				<h4>
					Сервисом <a href="https://www.helpareporter.com/">Help a reporter</a>
				</h4>
				<p>
				Это сервис для журналистов: там получают цитаты на&nbsp;нужную тему, истории и&nbsp;живой опыт разных людей и&nbsp;другие
				материалы. У&nbsp;него есть русскоязычным аналог&nbsp;&mdash;
				<a
					href="https://pressfeed.ru/"
				>Pressfeed</a>.
				</p>
				<p>
				Недавно мы&nbsp;опубликовали на&nbsp;HARO запрос&nbsp;&mdash; попросили рассказать о&nbsp;том, как компании перестраивают продажи в&nbsp;связи с
				кризисом:
				</p>
				<div class="wp-block-image">
				<figure class="aligncenter size-large">
					<g-image
					src="~/assets/images/article/запрос-на-про-COVID-на-HARO.png"
					alt="Запрос, который дал нам рекордное количество ответов и десяток респондентов"
					/>
					<figcaption>
					<em>Запрос, который дал нам рекордное количество ответов и&nbsp;десяток респондентов</em>
					<br />
					<em>
						для
						интервью
					</em>
					</figcaption>
				</figure>
				</div>
				<p>
				Мы&nbsp;получили шквал ответов. Так мы&nbsp;смогли не&nbsp;только написать
				<a
					href="https://www.carrotquest.io/blog/business-transformation-cases/"
				>статью о&nbsp;кейсах трансформации</a>, но
				и&nbsp;провели значительную часть важного для нас исследования: собрали первичные данные и&nbsp;назначили десяток
				интервью.
				</p>
				<p>Мы&nbsp;советуем придерживаться двух правил в&nbsp;разговоре с&nbsp;потенциальным респондентом:</p>

				<div class="post__text__rightbox">
					<div class="h1"><b>100%</b></div>
					<p class="font14px grey-text">
						тех, кого мы&nbsp;просили пообщаться с&nbsp;нами о&nbsp;том, как нам отстроиться от&nbsp;Intercom, согласились.
					</p>
				</div>

				<h4>Не&nbsp;продавать</h4>
				<p>Важно дать понять, что ты&nbsp;не&nbsp;продаешь продукт, а&nbsp;изучаешь рынок.</p>
				
				<h4>Говорить правду</h4>
				<p>Правдивые истории для приглашения на&nbsp;интервью&nbsp;&mdash; самые конвертирующие.</p>
				

				<p>
					Например, когда мы&nbsp;только начинали искать свое место на&nbsp;американском рынке, мы&nbsp;честно говорили, что наш продукт
					похож на&nbsp;популярный на&nbsp;западе сервис
					<a
						href="https://www.intercom.com/"
					>Intercom</a> и&nbsp;мы&nbsp;ищем способы отстроиться от&nbsp;него.
				</p>

				<h2 id="kak-kvalifitsirovat-respondentov">Как квалифицировать респондентов</h2>
				<p>Квалифицируйте респондентов на&nbsp;этапе знакомства, чтобы не&nbsp;тратить время впустую.</p>
				<figure class="wp-block-image alignwide size-large">
				<g-image
					src="~/assets/images/article/Dashly-for-ecom-2.png"
					alt="Квалификационная часть интервью в таблице, где хранятся все интервью сектора eCom"
				/>
				<figcaption>
					<em>Квалификационная часть интервью в&nbsp;таблице, где хранятся все интервью сектора eCom</em>
				</figcaption>
				</figure>

				<div class="post__text__rightbox font14px grey-text">
					<g-image
						src="~/assets/images/article/love.png"
						width="60"
						height="65"
						alt="love"
					/>
					<p>
						Когда мы&nbsp;составляем квалификацию, то&nbsp;подробно описываем сегмент для изучения.
					</p>
				</div>

				<p>
				Допустим, вы&nbsp;изучаете, как в&nbsp;разных компаниях построены процессы лидогенерации. Вам удалось связаться с&nbsp;кем-то из
				крупной компании, большая боль которой&nbsp;&mdash; сбор лидов. Если вы&nbsp;разговариваете с&nbsp;человеком из&nbsp;саппорта, об&nbsp;этой
				боли он&nbsp;вам не&nbsp;расскажет. Лучше не&nbsp;тратить час его и&nbsp;своего времени на&nbsp;интервью, а&nbsp;попросить его связать вас с
				кем-то другим в&nbsp;той&nbsp;же компании. Его контакт сохранить на&nbsp;случай исследования про саппорт.
				</p>
				

				<div class="post__text__leftbox">
					<g-image
						src="~/assets/images/article/click.png"
						width="59"
						height="57"
						alt="click"
					/>
					<p>
						<em>
							<b>Пример:</b> 
							<br>
							Компании до&nbsp;30&nbsp;человек, на&nbsp;стадии расширения, потенциальная боль&nbsp;&mdash; не&nbsp;получается настроить
							омниканальную коммуникацию с&nbsp;клиентами, данные хранятся в&nbsp;разных системах, они пользуются определенным
							сервисом/сервисами, тарифом Growth или аналогичным.
						</em>
					</p>
				</div>

				<p>Сформулируйте короткую квалификационную серию вопросов:</p>
				<ul>
				<li>
					В&nbsp;какой компании работает респондент?
					<br />Тип бизнеса, размер, индустрия, стадия развития бизнеса?
				</li>
				<li>Какую позицию занимает человек, какие у&nbsp;него задачи?</li>
				</ul>
				<p>
				В&nbsp;зависимости от&nbsp;задачи исследования, можно еще сильнее сузить квалификацию. Например, мы&nbsp;спрашиваем об
				количестве людей в&nbsp;команде поддержки, объеме трафика на&nbsp;сайт и&nbsp;количестве клиентов в&nbsp;базе:
				</p>

				<h2 id="kak-segmentirovat-respondentov">Как сегментировать респондентов</h2>
				<p>
				Квалификация нужна не&nbsp;только для того, чтобы отсеивать респондентов&nbsp;&mdash; она помогает в&nbsp;дальнейшем сегментировать и
				анализировать данные, полученные в&nbsp;ходе исследований.
				</p>
				<p>Мы&nbsp;делим интервью&nbsp;по:</p>
				<ul>
				<li>типам бизнесов,</li>
				<li>индустриям,</li>
				<li>темам самих интервью,</li>
				<li>ролям респондентов в&nbsp;компании (C-level, маркетинг, поддержка, продажи, аналитики и&nbsp;т.д.),</li>
				<li>проблемам, с&nbsp;которыми сталкиваются компании,</li>
				<li>сервисам, которыми они пользуются.</li>
				</ul>
				<p>И&nbsp;анализируем их&nbsp;соответственно по&nbsp;этим группам, а&nbsp;не&nbsp;все одновременно.</p>
				<p>
				Когда мы&nbsp;ввели такую сегментацию, качество инсайтов выросло: мы&nbsp;смогли находить боли разных команд внутри
				компаний клиентов и&nbsp;гораздо лучше понимать, как мы&nbsp;можем их&nbsp;решить. Например, выделив в&nbsp;отдельный сегмент
				кастдевы с&nbsp;customer support leads, мы&nbsp;и&nbsp;узнали о&nbsp;том, как для них важна проблема неумения чатов переходить в
				режим офлайн.
				</p>

				<h2
				id="kak-rasschitat-vremya-na-issledovanie-segmenta-kanala"
				>Как рассчитать время на&nbsp;исследование сегмента/канала</h2>
				<figure class="aligncenter size-large">
				<g-image
					src="~/assets/images/article/table.svg"
					alt="Таблица: Как рассчитать время на исследование сегмента/канала"
				/>
				</figure>
			</b-col>
		</b-row>
		
		<b-row class="post__recomendations mt-5 pt-5">
			<b-col cols="12">
				<div class="h2">Не&nbsp;пропустите статьи по&nbsp;теме:</div>
			</b-col>
			<b-col cols="12" md="6" lg="4" class="mt-4">
				<a href="/blog/jobs-to-be-done-theory/">
					<g-image
						src="~/assets/images/article/1.png"
						width="340"
						class="mb-3"
						alt="Jobs to be Done или всё, что следует знать о желаниях пользователей"
					/>
					Jobs to&nbsp;be&nbsp;Done или всё, что следует знать о&nbsp;желаниях пользователей
				</a>
			</b-col>
			<b-col cols="12" md="6" lg="4" class="mt-4">
				<a href="/blog/product-research/">
					<g-image
						src="~/assets/images/article/2.png"
						width="340"
						class="mb-3"
						alt="Гайд по продуктовым исследованиям: опыт SkyEng, Carrot quest, Miro и Дом.ru"
					/>
					Гайд по&nbsp;продуктовым исследованиям: опыт SkyEng, Carrot quest, Miro и&nbsp;Дом.ru
				</a>
			</b-col>
			<b-col cols="12" md="6" lg="4" class="mt-4">
				<a href="/blog/hallway-usability-testing/">
					<g-image
						src="~/assets/images/article/3.png"
						width="340"
						class="mb-3"
						alt="Коридорные тесты: как быстро провести юзабилити-тест интерфейса или лендинга"
					/>
					Коридорные тесты: как быстро провести юзабилити-тест интерфейса или лендинга
				</a>
			</b-col>
		</b-row>

		<b-row class="post__registration align-items-center">
			<b-col cols="12" md="7" lg="7" class="offset-md-4 offset-lg-5">
				<div class="h2">Подключите Carrot&nbsp;quest</div>
				<p>Первые 14 дней бесплатно</p>
				<form v-on:submit.prevent="registration">
					<input required type="email" v-model="regEmail" placeholder="Email" class="form__email py-2 px-3" />
					<input value="Подключить" type="submit" class="form__button py-2 px-3" />
				</form>
			</b-col>
		</b-row>

	</Layout>
</template>

<script>
	export default {
		metaInfo: {
			title: "Customer Development или как протестировать идею фичи за 2 дня",
			meta: [
				{
					name: "description",
					content:
					"Рассказываем, как перестать терять деньги на разработке никому не нужных фичей и быстро проверять позиционирование продуктов и сегменты пользователей."
				},

				{
					property: "article:publisher",
					content: "https://www.facebook.com/carrotquest/"
				},
				{
					property: "article:published_time",
					content: "2020-05-20T05:24:56+00:00"
				},
				{
					property: "article:modified_time",
					content: "2020-06-11T04:44:33+00:00"
				},

				{ property: "og:locale", content: "ru_RU" },
				{ property: "og:type", content: "article" },
				{
					property: "og:title",
					content:
					"Customer Development или как протестировать идею фичи за 2 дня"
				},
				{
					property: "og:description",
					content:
					"Рассказываем, как перестать терять деньги на разработке никому не нужных фичей и быстро проверять позиционирование продуктов и сегменты пользователей."
				},
				{
					property: "og:url",
					content: "https://www.carrotquest.io/blog/customer-development/"
				},
				{ property: "og:site_name", content: "Блог Carrot quest" },
				{
					property: "og:image",
					content:
					"https://www.carrotquest.io/blog/wp-content/uploads/2020/05/сниппет-кастдев.png"
				},
				{ property: "og:image:width", content: "1202" },
				{ property: "og:image:height", content: "634" },

				{ name: "twitter:card", content: "summary" },
				{
					name: "twitter:image",
					content:
					"https://www.carrotquest.io/blog/wp-content/uploads/2020/05/сниппет-кастдев.png"
				},
				{ name: "twitter:creator", content: "@cq_product" },
				{ name: "twitter:site", content: "@cq_product" }
			],
			link: [
			{
				rel: "canonical",
				href: "https://www.carrotquest.io/blog/customer-development/"
			}
			]
		},
		components: {
			ReadProgress: () =>
			import("vue-read-progress")
				.then(m => m.default)
				.catch()
		},
		data: function() {
			return {
				email: '',
				regEmail: '',
				formSubmit: false
			};
		},
		methods: {
			onSubmit () {
				carrotquest.track('скачал вопросы для кастдева', {
					'Email': this.email
				})
				carrotquest.identify({
					'$email': this.email
				},{ 
					doubleSubscribe: true
				})
				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_lead_from_blog')
				this.formSubmit = !this.formSubmit
			},
			registration () {
				window.open("https://carrotquest.io/panel/register/?email=" + this.regEmail);
				this.regEmail = ""
			}
		},
		mounted() {


			//Плавное перемещение по ссылке
			const anchors = document.querySelectorAll("a.scroll-to");
			for (let anchor of anchors) {
			anchor.addEventListener("click", function(e) {
				e.preventDefault();

				const blockID = anchor.getAttribute("href");

				document.querySelector(blockID).scrollIntoView({
				behavior: "smooth",
				block: "center"
				});
			});
			}
		}
	};
</script>