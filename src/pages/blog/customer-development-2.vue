<template>
	<Layout class="post">
		<!-- Прогрес бар чтения -->
		<ClientOnly>
			<read-progress  color="#717171" height="2px" :shadow="false"></read-progress>
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
						<b-breadcrumb-item active>Customer Development или как протестировать идею фичи за 2 дня</b-breadcrumb-item>
					</b-breadcrumb>

					<!-- Заголовок -->
					<h1 class=" mb-3">Customer Development или как протестировать идею фичи за 2 дня</h1>

					<!-- Информация -->
					<div class="post__about__info font14px">
						<span class="date">20 мая, 2020</span>
						|
						<span class="time">Время чтения: 10 мин.</span>
					</div>
					
				</div>
			</b-col>

			<!-- Изображение записи -->
			<b-col col cols="12" class="post__image mb-4 mb-md-5 order-1 order-md-2">
				<g-image src="~/assets/images/article/Фичи-min.jpg" class="d-none d-md-block" width="1100" alt="Customer Development или как протестировать идею фичи за 2 дня" />
				<g-image src="~/assets/images/article/Фичи-min.jpg" class="d-md-none" width="500" height="500" alt="Customer Development или как протестировать идею фичи за 2 дня" />
			</b-col>

		</b-row>
		
		
		<!-- Текст статьи -->
		<b-row class="post__content font17px">
			<div class="post__authtor">
				<g-image src="~/assets/images/article/masha.png" alt="Мария Бурдина" />
				<h5>Мария Бурдина</h5>
				<p class="font14px">Пишу о том, в чем мы разбираемся.</p>
			</div>

			<b-col offset-xl="1">


			<h3 id="toc-menu">Содержание:</h3>
				<ol class="table-of-contents">
					<li>
						<a rel="nofollow" href="#chto-takoe-customer-development">
							Что такое Customer Developmen
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#zachem-nuzhen-customer-development-i-kak-ego-rezultaty-rabotayut-na-pr">
							Зачем нужен Customer Development и как его результаты работают на практике
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#instrumenty-customer-development">
							Инструменты Customer Development
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#etapy-issledovaniya-i-neobhodimye-shagi">
							Этапы исследования и необходимые шаги
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-sostavit-gajd-s-voprosami-nbsp">
							Как составить гайд с вопросами&nbsp;
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-najti-respondentov">
							Как найти респондентов
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-kvalifitsirovat-respondentov">
							Как квалифицировать респондентов
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-segmentirovat-respondentov">
							Как сегментировать респондентов
						</a>
					</li>
					<li>
						<a rel="nofollow" href="#kak-rasschitat-vremya-na-issledovanie-segmenta-kanala">
							Как рассчитать время на исследование сегмента/канала
						</a>
					</li>
				</ol>

				<p>Продуктовые команды постоянно придумывают новые фичи, на их разработку тратятся месяцы и сотни тысяч рублей, но
					пользователи в них плохо активируются. У продуктовых лендингов трагически низкая конверсия. Целевой сегмент не
					готов покупать продукт. Больно? Очень.&nbsp;</p>



				<p>Нам хорошо знакомы эти проблемы, но мы научились с ними справляться с помощью регулярных исследований
					пользователей. Используя методы Customer Development, мы провели сотни интервью. Только 80 из них провела
					команда нашего американского продукта <a rel="noreferrer noopener" href="http://dashly.io"
						target="_blank">Dashly</a> за одно лето в акселераторе <a rel="noreferrer noopener" href="http://iidf.ru"
						target="_blank">ФРИИ</a>.&nbsp;</p>



				<p>В этой статье мы расскажем, как с помощью методов и инструментов Customer Development мы тестируем:</p>



				<ul>
					<li>позиционирование основного продукта и ключевых фичей,&nbsp;</li>
					<li>каналы коммуникации,</li>
					<li>сегменты пользователей.</li>
				</ul>




				<h2 id="chto-takoe-customer-development">Что такое Customer Development</h2>



				<p>Недавно во время хакатона одна из команд работала над валидацией идеи нашей новой фичи. За 2 дня ребята:</p>



				<ul>
					<li>поговорили с десятком контент-маркетологов,&nbsp;</li>
					<li>нашли их главную боль, связанную с лидогенерацией,&nbsp;</li>
					<li>придумали решение,</li>
					<li>разработали MVP,&nbsp;</li>
					<li>провалидировали его.</li>
				</ul>



				<p>Фича пошла в разработку. У нас уже есть клиенты, которые ждут ее релиза.&nbsp;</p>



				<div class="keythought">
					<g-image src="~/assets/images/article/rockstar_icon.png" alt="rock" />
					<span>Customer Development — это быстрое тестирование идей продуктов/фичей с помощью серий глубинных интервью с
						потенциальными пользователями. </span>
				</div>



				<p>В классическом понимании Customer Development, как его задумал автор понятия Стив Бланк, — методология создания
					новых продуктов, описывающая весь путь стартапа. Она включает в себя много всего: от глубинных интервью до А/Б
					тестов и проработки каналов продаж. </p>



				<p>Одна из частей Customer Development — быстрый метод исследования пользователей, который требует мало ресурсов.
					Цикл такого исследования составляет месяц, для небольшой фичи может не превышать недели и даже пары дней.
					Понадобится 1-2 человека.&nbsp;</p>



				<p>Customer Development обычно применяют при запуске новых продуктов. Методы Customer Development легко адаптировать
					и под другие задачи, которые возникают на разных этапах развития компании. С его помощью:&nbsp;</p>



				<ul>
					<li>проверяют позиционирование продукта и фичей;</li>
					<li>изучают каналы коммуникации;</li>
					<li>ищут новые сегменты пользователей.</li>
				</ul>


				<h2 id="zachem-nuzhen-customer-development-i-kak-ego-rezultaty-rabotayut-na-pr">Зачем нужен Customer Development и
		как его результаты работают на практике</h2>



				<div id="quote_345465573" class="cq-block-quote">
					<div class="cq-block-quote__text">
						<p>Кастдевы — это инструмент, который помогает нам избегать наших галлюцинаций и видеть реальную картину
							мира. Мы можем придумать что угодно, а в реальности все может быть совсем не так. Нужно идти и
							валидировать идею, которая у нас появилась.</p>
					</div>

					<div class="cq-block-quote__meta">
						<div class="author__image">
							<g-image src="~/assets/images/article/1592_oooo.plus_.png" width="51" alt="Валерия Попкова" />
						</div>
						<div class="author__meta">
							<div class="author__meta-name">Валерия Попкова</div>
							<div>Growth Marketing, Dashly.io</div>
						</div>
					</div>
				</div>


				<figure class="wp-block-image alignwide">
					<g-image src="~/assets/images/article/Дэшли главная 1.png" alt="Главная страница сайта Dashly до исследования пользователей" />
					<figcaption><em>Главная страница сайта Dashly до исследования пользователей</em></figcaption>
				</figure>



				<figure class="wp-block-image alignwide size-large">
					<g-image src="~/assets/images/article/Дэшли-главная-2-1050x481.png" alt="Главная страница сайта Dashly после исследования пользователей" />
					<figcaption><em>Главная страница сайта Dashly после исследования пользователей</em></figcaption>
				</figure>



				<p>Результаты кастдевов идут прямиком в продукт, маркетинг и продажи. От данных кастдева зависит:</p>



				<ul>
					<li>как мы будем рассказывать о фиче в блоге, в рассылке и непосредственно клиентам во время демо;</li>
					<li>что напишем на лендинге;</li>
					<li>кому будем предлагать попробовать фичу;</li>
					<li>какие каналы будем использовать для коммуникации с потенциальными пользователями этой фичи;</li>
					<li>какие показывать юзкейсы.&nbsp;</li>
				</ul>
				



				<figure class="wp-block-image alignwide">
					<g-image src="~/assets/images/article/Кикофф чат-бота.png" alt="Kick off фичи, созданный на основе исследования пользователей и конкурентов" />
					<figcaption><em>Kick off фичи, созданный на основе исследования пользователей и конкурентов</em></figcaption>
				</figure>



				<figure class="wp-block-image alignwide">
					<g-image src="~/assets/images/article/Чат-бот юзкейсы из кикоффа.png" alt="Описание юзкейсов и целевой аудитории в kick off чат-бота" />
					<figcaption><em>Описание юзкейсов и целевой аудитории в kick off чат-бота</em></figcaption>
				</figure>



				<p>На основе Customer Development и других исследований пользователей мы оставляем так называемый kick off фичи.</p>



				<p>&nbsp;Kick off описывает:&nbsp;</p>



				<ul>
					<li>проблему, которую решает фича,&nbsp;</li>
					<li>решение,&nbsp;</li>
					<li>юзкейсы,&nbsp;</li>
					<li>сегмент,&nbsp;</li>
					<li>последовательность релиза&nbsp;</li>
					<li>и другие важные вещи.</li>
				</ul>



				<p>Процесс продаж тоже зависит от кастдевов.&nbsp;</p>



				<div id="quote_647634473" class="cq-block-quote">
					<div class="cq-block-quote__text">
						<p>Менеджер по продажам должен во время демо задавать правильные вопросы, чтобы предлагать нужное решение,
							понимать, что входит в зону ответственности того или иного человека, как могут быть устроены процессы в
							компании потенциального клиента. </p>
					</div>

					<div class="cq-block-quote__meta">
						<div class="author__image">
							<g-image src="~/assets/images/article/1592_oooo.plus_.png" width="51" alt="Валерия Попкова" />
						</div>
						<div class="author__meta">
							<div class="author__meta-name">Валерия Попкова</div>
							<div>Growth Marketing, Dashly.io</div>
						</div>
					</div>
				</div>
				


				<p>Опыт исследования пользователей дает менеджерам нужный для этого бэкграунд.&nbsp;</p>



				<p>Результаты Customer Development непосредственно в своей работе используют:&nbsp;</p>



				<ul>
					<li>команда продукта,&nbsp;</li>
					<li>продакт-маркетинг,&nbsp;</li>
					<li>маркетинговая команда,&nbsp;</li>
					<li>контентная команда,</li>
					<li>команда продаж.&nbsp;</li>
				</ul>




				<h2 id="instrumenty-customer-development">Инструменты Customer Development</h2>



				<p>Основной инструмент Customer Development — глубинные интервью. В рамках этого подхода интервью бывают двух
					видов:&nbsp;</p>



				<ul>
					<li><strong>Проблемные интервью</strong></li>
				</ul>



				<p>Цель таких интервью — проверить гипотезу и узнать о неочевидных проблемах пользователей.</p>



				<p><em>Пример гипотезы: “Нужно продвигать Dashly среди автодилеров и агентств недвижимости”.</em> Она не
					подтвердилась, и мы смогли быстро пойти дальше — искать другие сегменты.&nbsp;</p>



				<ul>
					<li><strong>Решенческие интервью</strong></li>
				</ul>



				<p>Цель решенческих интервью — протестировать решение или прототип продукта на реальных пользователях и дополнить
					видение проблем, связанных с продуктом. Для проведения такого интервью понадобится MVP, то есть минимально
					жизнеспособный продукт.&nbsp;</p>



				<p>Не путайте решенческое интервью с <a href="https://www.carrotquest.io/blog/hallway-usability-testing/"
						target="_blank" rel="noreferrer noopener">коридорным тестом</a>. В ходе коридорного теста проверяется
					интерфейс, в ходе решенческого интервью — само решение, его ценность.</p>




				<h2 id="etapy-issledovaniya-i-neobhodimye-shagi">Этапы исследования и необходимые шаги</h2>



				<p>Если вы планируете Customer Development полного цикла для нового продукта или фичи — исследование будет
					разбиваться на две части: до и после появления MVP. в первой части исследования вы будете проводить проблемные
					интервью, во второй — решенческие.</p>



				<p>Шаги для первой части исследования:</p>



				<ol>
					<li>Формулируем гипотезу.&nbsp;</li>
					<li>Выбираем сегмент для проверки гипотезы.&nbsp;&nbsp;</li>
					<li>Составляем гайд с вопросами для интервью и квалифицирующими вопросами для отсева респондентов.&nbsp;</li>
					<li>Находим подходящих респондентов, квалифицируем их и при необходимости фильтруем. Договариваемся на интервью.
					</li>
					<li>Проводим интервью, по ходу интервью или сразу после фиксируем основные инсайты.&nbsp;</li>
				</ol>



				<div class="keythought">
					<g-image src="~/assets/images/article/rockstar_icon.png" alt="rock" />
					<span>Поскольку мы не столько тестируем продукт, сколько каналы продвижения и выбираем сегменты, в которых будем
						продвигать продукт в ближайшее время, то проводим преимущественно проблемные интервью. А решенческие
						интервью совмещаем с демо продукта. </span>
				</div>



				<p><em>Пример:&nbsp;</em></p>



				<p>В прошлом году команда Dashly провела большое исследование сектора SaaS. Инсайты, полученные в ходе этого
					исследования, проверяли в ходе демо для потенциальных клиентов из этого сектора. Тогда мы узнали, что многие
					чаты не переходят в режим офлайн, из-за чего операторам приходится отвечать на обращения в поддержку с телефона
					до поздней ночи. Наш чат умеет это делать — это помогло нам убедить нескольких клиентов подключить Dashly.&nbsp;
				</p>



				<div id="quote_1744209973" class="cq-block-quote">
					<div class="cq-block-quote__text">
						<p>Кастдев — это обходной диалог с потенциальными покупателями: купят тебя или нет, нужен ты или нет, если
							нужен — то почему, как, в какой момент, кому нужен из команды. </p>
					</div>

					<div class="cq-block-quote__meta">
						<div class="author__image">
							<g-image src="~/assets/images/article/1592_oooo.plus_.png" width="51" alt="Валерия Попкова" />
						</div>
						<div class="author__meta">
							<div class="author__meta-name">Валерия Попкова</div>
							<div>Growth Marketing, Dashly.io</div>
						</div>
					</div>
				</div>

				



				<h2 id="kak-sostavit-gajd-s-voprosami-nbsp">Как составить гайд с вопросами&nbsp;</h2>



				<p>Есть несколько правил, которые помогут сформулировать вопросы для проблемного интервью:&nbsp;</p>



				<div class="wp-block-image">
					<figure class="aligncenter size-large">
						<g-image src="~/assets/images/article/Правила-составления-вопросов-для-интервью.png" alt="Как составить гайд с вопросами " />
					</figure>
				</div>



				<p>Если вы хотите научиться задавать пользователям правильные вопросы, обязательно прочитайте книгу Роба Фицпатрика
					«Спроси маму». Это самое лучшее практическое руководство для общения с потенциальными клиентами из написанных.
					Потом как можно больше практикуйтесь в проведении интервью. На всякий случай можете еще почитать <a
						rel="noreferrer noopener" href="https://www.carrotquest.io/blog/product-research" target="_blank">подробное
						руководств</a><a href="https://www.carrotquest.io/blog/product-research" target="_blank"
						rel="noreferrer noopener">о</a><a rel="noreferrer noopener"
						href="https://www.carrotquest.io/blog/product-research" target="_blank"> по продуктовым исследованиям</a> и
					статью о том, как <a rel="noreferrer noopener" href="https://www.carrotquest.io/blog/why-user-interview-fail/"
						target="_blank">не провалить интервью с пользователем.&nbsp;</a></p>



				<div class="keythought">
					<g-image src="~/assets/images/article/rockstar_icon.png" alt="rock" />
					<span>Если вы планируете проводить серийные исследования, достаточно разработать универсальный гайд, которым
						будут пользоваться все команды. </span>
				</div>



				<p>Так, команде Dashly, удалось составить такой гайд с вопросами для кастдева, которым мы пользуемся уже год. </p>




				<section class="container lidform-universal-container">
					<div id="lidform-universal_504732347" class="lidform-universal">
						<div class="row">
							<div class="col-12 col-md-8">
								<h5 class="lidform-universal-h5">Псс, надо гайд с вопросами и шаблон <br>для хранения данных из
									интервью?</h5>
								<form id="form-begin_504732347" class="form-begin " onsubmit="return false">
									<input class="input" required="" type="email" name="email" placeholder="Email"> <input
										class="button btn btn-orange" value="Скачать" type="submit">
								</form>

								<p id="form-done_504732347" class="lidform-universal-p-2 form-done">
									Спасибо! Мы уже отправили всё на почту </p>

								<div class="lidform-universal-left-pic d-none d-md-block">
								</div>
							</div>

							<div class="col-12 col-md-4 d-md-block lidform-universal-right-pic" style="">
							</div>
						</div>
					</div>
				</section>




				<h2 id="kak-najti-respondentov">Как найти респондентов</h2>



				<figure class="wp-block-image size-large">
					<g-image src="~/assets/images/article/Запросы-на-HARO.png" alt="54 питча под нашим вопросом про судьбы eCom во время пандемии COVID-19" />
					<figcaption><em>54 (!) питча под нашим вопросом про судьбы eCom во время пандемии COVID-19</em></figcaption>
				</figure>



				<p>Время на поиск респондентов зависит от размера сегмента:&nbsp;</p>



				<ul>
					<li>Если сегмент широкий — например, вы изучаете в целом сектор eCom — времени потребуется минимум. Достаточно
						будет нескольких постов в Facebook.</li>
				</ul>



				<ul>
					<li>Если сегмент узкий — например, eCom c поддержкой в чате, в том числе в мобильном приложении, с командой
						поддержки больше 30 человек, использующие конкурирующий сервис с тарифом Enterprise, — придется потратить
						больше времени и проявить изобретательность для поиска неочевидных каналов, где можно найти нужных вам
						людей.&nbsp;</li>
				</ul>



				<p>Для поиска таких респондентов мы пользуемся:</p>



				<ul>
					<li><strong>нетворкингом и имеющимися контактами в разных компаниях</strong></li>
				</ul>



				<p>Бывает так, что мы точно знаем, к кому можно обратиться и с кем стоит поговорить. Или у нас есть контакты в
					компании и мы можем попросить связать нас с человеком из нужной команды.</p>



				<ul>
					<li><strong>telegram-каналами</strong> — <a
							href="https://courses.uncrn.me/tg?invite=CFbMKlHA_QjMviIxedQ8bA">[UNCRN.me] Коридорки и кастдев</a>, <a
							href="https://ttttt.me/productperm">Perm Product People</a>, <a
							href="https://t-do.ru/epicgrowth_chat">Epic Growth Chat</a>, <a
							href="https://t-do.ru/productsense_chat">ProductSense Chat<br></a></li>
				</ul>



				<p>Во многом, это тоже история про нетворкинг. Профессиональные сообщества — прекрасный источник респондентов.&nbsp;
				</p>



				<ul>
					<li><strong>сообществами в Slack&nbsp;</strong></li>
				</ul>



				<p>У них есть важное преимущество перед группами в Facebook — поиск сообщений по ключевым словам. То есть можно
					посмотреть сообщения, затрагивающие проблему, которую вы исследуете. Дальше можно связаться с автором сообщения,
					уточнить ситуацию и суть проблемы и спросить, готов ли он поговорить об этом подробнее в ходе интервью. Как
					правило, авторы таких сообщений легко соглашаются на разговор.&nbsp;</p>



				<figure class="wp-block-image alignwide size-large">
					<g-image src="~/assets/images/article/Запросы-на-HARO.png" alt="письмо-с-приглашением-на-интервью" />
					<figcaption><em>Письмо с приглашением на интервью</em></figcaption>
				</figure>



				<ul>
					<li><strong>Сервисом </strong><a href="https://www.helpareporter.com/"><strong>Help a
								reporter</strong></a><strong>&nbsp;</strong></li>
				</ul>



				<p>Это сервис для журналистов: там получают цитаты на нужную тему, истории и живой опыт разных людей и другие
					материалы. У него есть русскоязычным аналог — <a href="https://pressfeed.ru/">Pressfeed</a>.&nbsp;</p>



				<p>Недавно мы опубликовали на HARO запрос — попросили рассказать о том, как компании перестраивают продажи в связи с
					кризисом:&nbsp;</p>



				<div class="wp-block-image">
					<figure class="aligncenter size-large">
						<g-image src="~/assets/images/article/запрос-на-про-COVID-на-HARO.png" alt="Запрос, который дал нам рекордное количество ответов и десяток респондентов" />
						<figcaption><em>Запрос, который дал нам рекордное количество ответов и десяток респондентов </em><br><em>для
								интервью</em></figcaption>
					</figure>
				</div>



				<p>Мы получили шквал ответов. Так мы смогли не только написать <a
						href="https://www.carrotquest.io/blog/business-transformation-cases/">статью о кейсах трансформации</a>, но
					и провели значительную часть важного для нас исследования: собрали первичные данные и назначили десяток
					интервью.</p>



				<p>Мы советуем придерживаться двух правил в разговоре с потенциальным респондентом:</p>



				<ol>
					<li><strong>Не продавать.</strong></li>
				</ol>



				<div id="quote_667755252" class="cq-block-quote">
					<div class="cq-block-quote__text">
						<p>Важно дать понять, что ты не продаешь продукт, а изучаешь рынок. </p>
					</div>

					<div class="cq-block-quote__meta">
						<div class="author__image">
							<g-image src="~/assets/images/article/1592_oooo.plus_.png" width="51" alt="Валерия Попкова" />
						</div>
						<div class="author__meta">
							<div class="author__meta-name">Валерия Попкова</div>
							<div>Growth Marketing, Dashly.io</div>
						</div>
					</div>
				</div>

				



				<ol start="2">
					<li><strong>Говорить правду.&nbsp;</strong></li>
				</ol>



				<div id="quote_1968627028" class="cq-block-quote">
					<div class="cq-block-quote__text">
						<p>Правдивые истории для приглашения на интервью — самые конвертирующие. </p>
					</div>

					<div class="cq-block-quote__meta">
						<div class="author__image">
							<g-image src="~/assets/images/article/1592_oooo.plus_.png" width="51" alt="Валерия Попкова" />
						</div>
						<div class="author__meta">
							<div class="author__meta-name">Валерия Попкова</div>
							<div>Growth Marketing, Dashly.io</div>
						</div>
					</div>
				</div>

				


				<p>Например, когда мы только начинали искать свое место на американском рынке, мы честно говорили, что наш продукт
					похож на популярный на западе сервис <a href="https://www.intercom.com/">Intercom</a> и мы ищем способы
					отстроиться от него.&nbsp;</p>



				<div class="keythought">
					<g-image src="~/assets/images/article/rockstar_icon.png" alt="rock" />
					<span>100% тех, кого мы просили пообщаться с нами о том, как нам отстроиться от Intercom, согласились. </span>
				</div>




				<h2 id="kak-kvalifitsirovat-respondentov">Как квалифицировать респондентов</h2>



				<p>Квалифицируйте респондентов на этапе знакомства, чтобы не тратить время впустую.&nbsp;</p>



				<figure class="wp-block-image alignwide size-large">
					<g-image src="~/assets/images/article/Dashly-for-ecom-2.png" alt="Квалификационная часть интервью в таблице, где хранятся все интервью сектора eCom" />
					<figcaption><em>Квалификационная часть интервью в таблице, где хранятся все интервью сектора eCom</em>
					</figcaption>
				</figure>



				<p>Допустим, вы изучаете, как в разных компаниях построены процессы лидогенерации. Вам удалось связаться с кем-то из
					крупной компании, большая боль которой — сбор лидов. Если вы разговариваете с человеком из саппорта, об этой
					боли он вам не расскажет. Лучше не тратить час его и своего времени на интервью, а попросить его связать вас с
					кем-то другим в той же компании. Его контакт сохранить на случай исследования про саппорт.&nbsp;&nbsp;</p>



				<div class="keythought">
					<g-image src="~/assets/images/article/rockstar_icon.png" alt="rock" />
					<span>Когда мы составляем квалификацию, то подробно описываем сегмент для изучения. </span>
				</div>



				<p><em>Пример:</em> компании до 30 человек, на стадии расширения, потенциальная боль — не получается настроить
					омниканальную коммуникацию с клиентами, данные хранятся в разных системах, они пользуются определенным
					сервисом/сервисами, тарифом Growth или аналогичным.</p>



				<p>Сформулируйте короткую квалификационную серию вопросов:&nbsp;</p>



				<ul>
					<li>В какой компании работает респондент?<br>Тип бизнеса, размер, индустрия, стадия развития бизнеса?&nbsp;</li>
					<li>Какую позицию занимает человек, какие у него задачи?</li>
				</ul>



				<p>В зависимости от задачи исследования, можно еще сильнее сузить квалификацию. Например, мы спрашиваем об
					количестве людей в команде поддержки, объеме трафика на сайт и количестве клиентов в базе:</p>




				<h2 id="kak-segmentirovat-respondentov">Как сегментировать респондентов</h2>



				<p>Квалификация нужна не только для того, чтобы отсеивать респондентов — она помогает в дальнейшем сегментировать и
					анализировать данные, полученные в ходе исследований.&nbsp;</p>



				<p>Мы делим интервью по:</p>



				<ul>
					<li>типам бизнесов,&nbsp;</li>
					<li>индустриям,&nbsp;</li>
					<li>темам самих интервью,&nbsp;</li>
					<li>ролям респондентов в компании (C-level, маркетинг, поддержка, продажи, аналитики и т.д.),&nbsp;</li>
					<li>проблемам, с которыми сталкиваются компании,&nbsp;</li>
					<li>сервисам, которыми они пользуются.&nbsp;</li>
				</ul>



				<p>И анализируем их соответственно по этим группам, а не все одновременно.&nbsp;</p>



				<p>Когда мы ввели такую сегментацию, качество инсайтов выросло: мы смогли находить боли разных команд внутри
					компаний клиентов и гораздо лучше понимать, как мы можем их решить. Например, выделив в отдельный сегмент
					кастдевы с customer support leads, мы и узнали о том, как для них важна проблема неумения чатов переходить в
					режим офлайн.&nbsp;</p>




				<h2 id="kak-rasschitat-vremya-na-issledovanie-segmenta-kanala">Как рассчитать время на исследование сегмента/канала
				</h2>



				<figure class="wp-block-table">
					<table>
						<tbody>
							<tr>
								<td>Поиск респондентов</td>
								<td>1-2 дня</td>
							</tr>
							<tr>
								<td>Одно интервью</td>
								<td>час</td>
							</tr>
							<tr>
								<td>Все интервью</td>
								<td>1-2 дня&nbsp;</td>
							</tr>
							<tr>
								<td>Расшифровка</td>
								<td>по ходу интервью или сразу после</td>
							</tr>
							<tr>
								<td>Анализ данных</td>
								<td>1 день</td>
							</tr>
						</tbody>
					</table>
				</figure>
	


			</b-col>
		</b-row>

	</Layout>
</template>

<script>

	export default {
		metaInfo: {
			title: 'Customer Development или как протестировать идею фичи за 2 дня',
			meta: [
				{name:	   'description'			,content: 'Рассказываем, как перестать терять деньги на разработке никому не нужных фичей и быстро проверять позиционирование продуктов и сегменты пользователей.'},
				
				{property: 'article:publisher'		,content: 'https://www.facebook.com/carrotquest/'},
				{property: 'article:published_time'	,content: '2020-05-20T05:24:56+00:00'},
				{property: 'article:modified_time'	,content: '2020-06-11T04:44:33+00:00'},

				{property: 'og:locale'				,content: 'ru_RU'},
				{property: 'og:type'				,content: 'article'},
				{property: 'og:title'				,content: 'Customer Development или как протестировать идею фичи за 2 дня'},
				{property: 'og:description'			,content: 'Рассказываем, как перестать терять деньги на разработке никому не нужных фичей и быстро проверять позиционирование продуктов и сегменты пользователей.'},
				{property: 'og:url'					,content: 'https://www.carrotquest.io/blog/customer-development/'},
				{property: 'og:site_name'			,content: 'Блог Carrot quest'},
				{property: 'og:image'				,content: 'https://www.carrotquest.io/blog/wp-content/uploads/2020/05/сниппет-кастдев.png'},
				{property: 'og:image:width'			,content: '1202'},
				{property: 'og:image:height'		,content: '634'},

				{name:	   'twitter:card'			,content: 'summary'},
				{name:	   'twitter:image'			,content: 'https://www.carrotquest.io/blog/wp-content/uploads/2020/05/сниппет-кастдев.png'},
				{name:	   'twitter:creator'		,content: '@cq_product'},
				{name:	   'twitter:site'			,content: '@cq_product'}
			],
			link: [
				{rel:	   'canonical'				,href: 'https://www.carrotquest.io/blog/customer-development/'}
			]
		},
		components: {
			ReadProgress: () =>
				import ('vue-read-progress')
				.then(m => m.default)
				.catch()
		}
	}

</script>