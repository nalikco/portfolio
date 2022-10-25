package handler

import (
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"html/template"
	"net/http"
	"strconv"
)

type WorkLink struct {
	Title       string
	Link        string
	VisibleLink string
	Notice      string
}

type Work struct {
	ID               int
	Title            string
	ShortDescription template.HTML
	Description      template.HTML
	Technologies     string
	Links            []WorkLink
	Images           []int
}

var works = []Work{{
	ID:               4,
	Title:            "Bonuses",
	ShortDescription: "Сервис начисления бонусов по депозитам под процент в месяц.",
	Description:      "Сервис начисления бонусов по депозитам под процент в месяц.<br>Написано на PHP (фреймворк CodeIgniter 4) и JS.<br><br>Реализовано: авторизация, регистрация, восстановление пароля,<br>создание, редактирование депозитов, подсчёт прибыли с депозитов на баланс пользователя,<br>создание, редактирование, удаление тарифов,<br>создание, изменение статуса, удаление выводов,<br>создание, редактирование пользователей,<br>пагинация и сортировка.",
	Technologies:     "CI 4, JS",
	Links: []WorkLink{{
		Title:       "Ссылка",
		Link:        "",
		VisibleLink: "",
		Notice:      "запрет заказчика",
	}, {
		Title:       "Github",
		Link:        "",
		VisibleLink: "",
		Notice:      "запрет заказчика",
	}},
	Images: []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},
}, {
	ID:               3,
	Title:            "DR",
	ShortDescription: "Система точного учёта топлива, работников и техники в организации.",
	Description: "Проект, разработанный для точного учета топлива. Есть возможность добавлять типы топлива, работников и технику. Веб-приложение, при добавлении расхода/прихода само ведет подсчет остатков топлива, расхода/прихода за день. Отображается информация о среднем расходе за день, израсходованного топлива по каждому типу топлива, работнику и технике, а так же по дням. Есть возможность отмечать расходы/приходы, как проверенные, для удобства учета и сверки с документацией. Есть возможность сменить тему на темную/светлую." +
		"<br><br>Фронтенд разработан на VueJS в виде SPA. Бэкенд разработан на Flask (Python). Общаются между собой посредством API. Авторизация происходит через токены со сроком годности. Техника, работники и топливо сохраняется в кэше, чтобы не нагружать сервер (подгружать все данные для формы) при добавлении расходов и приходов.",
	Technologies: "Flask, VueJS",
	Links: []WorkLink{{
		Title:       "Ссылка",
		Link:        "",
		VisibleLink: "",
		Notice:      "недоступно",
	}, {
		Title:       "Github клиент",
		Link:        "https://github.com/iikworks/dr-client",
		VisibleLink: "github.com/iikworks/dr-client",
		Notice:      "",
	}, {
		Title:       "Github сервер",
		Link:        "https://github.com/iikworks/dr-server",
		VisibleLink: "github.com/iikworks/dr-server",
		Notice:      "",
	}},
	Images: []int{13, 14, 15, 16, 17, 18},
}, {
	ID:               2,
	Title:            "CalcBacteria",
	ShortDescription: "Скрипт подсчёта размножения бактерий двух видов.",
	Description: "Скрипт подсчёта размножения бактерий двух видов.<br> " +
		"Тестовое задание. Реализовано на чистом PHP с использованием CSS-фреймворка Tailwind.",
	Technologies: "PHP",
	Links: []WorkLink{{
		Title:       "Ссылка",
		Link:        "https://calcbacteria.herokuapp.com/",
		VisibleLink: "calcbacteria.herokuapp.com",
		Notice:      "",
	}, {
		Title:       "Github",
		Link:        "https://github.com/iikworks/calcbacteria",
		VisibleLink: "github.com/iikworks/calcbacteria",
		Notice:      "",
	}},
	Images: []int{19, 20},
}, {
	ID:               1,
	Title:            "Nolik",
	ShortDescription: "Игра «Крестики-нолики» с турнирной таблицей и уровнями.",
	Description: "Игра «Крестики-нолики» с турнирной таблицей и уровнями.<br>" +
		"Реализовано на чистом PHP и JS. Есть возможность указать имя и команду игры.<br>" +
		"В качестве CSS-фреймворка использован Tailwind.",
	Technologies: "PHP, JS",
	Links: []WorkLink{{
		Title:       "Ссылка",
		Link:        "https://nolik-app.herokuapp.com",
		VisibleLink: "nolik-app.herokuapp.com",
		Notice:      "",
	}, {
		Title:       "Github",
		Link:        "https://github.com/iikworks/nolik",
		VisibleLink: "github.com/iikworks/nolik",
		Notice:      "",
	}},
	Images: []int{21, 22, 23},
}}

func (h *Handler) WorksList(c *gin.Context) {
	c.HTML(http.StatusOK, "works/list.html", gin.H{
		"title": "Портфолио",
		"works": works,
	})
}

func (h *Handler) WorkDetail(c *gin.Context) {
	var work Work

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	for _, workFromList := range works {
		if workFromList.ID == id {
			work = workFromList
			break
		}
	}

	if work.ID == 0 {
		c.AbortWithError(http.StatusNotFound, errors.New("work not found"))
		return
	}

	c.HTML(http.StatusOK, "works/detail.html", gin.H{
		"title": fmt.Sprintf("Работа «%s»", work.Title),
		"work":  work,
	})
}
