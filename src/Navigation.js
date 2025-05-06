import { useResolvedPath } from "react-router-dom"
import "./pages/styles/Navigation.css"


export default function Navigation() {
    const path = useResolvedPath(window.location.pathname).pathname

    if (path === "/") {
        return ""
    }
    else {
        var block
        switch(path) {
            case "/bio":
                block = BioBlock()
                break
            case "/domestic":
                block = DomesticBlock()
                break
            case "/foreign":
                block = ForeignBlock()
                break
            case "/about":
                block = AboutBlock()
                break
            default:
                block = ""
                break
        }
        return (
            <div className="Navigation">
                <p className="NavigationTitle">Содержание</p>
                { block }
            </div>
        )
    }
}

function BioBlock() {
    return (
        <ul>
            <li><a href="#Детство">Детство</a></li>
            <li><a href="#Юность">Юность</a></li>
            <li><a href="#Начало жизни в России">Начало жизни в России</a></li>
            <li><a href="#Восхождение к власти">Восхождение к власти</a></li>
            <li><a href="#Мужчины">Мужчины</a></li>
            <li><a href="#Дети">Дети</a></li>
            <li><a href="#Старость">Старость</a></li>
        </ul>
    )
}

function DomesticBlock() {
    return (
        <ul>
            <li><a href="#Политика просвещенного абсолютизма">Политика просвещенного абсолютизма</a></li>
            <li><a href="#Реформа Сената">Реформа Сената</a></li>
            <li><a href="#Секуляризационная реформа">Секуляризационная реформа</a></li>
            <li><a href="#Ликвидация автономии Украины">Ликвидация автономии Украины</a></li>
            <li><a href="#Уложенная комиссия">Уложенная комиссия</a></li>
            <li><a href="#Пугачевское восстание">Пугачевское восстание</a></li>
            <li><a href="#Губернская реформа">Губернская реформа</a></li>
            <li><a href="#Экономическая политика">Экономическая политика</a></li>
            <li><a href="#Реформы образования, науки и культуры">Реформы образования, науки и культуры</a></li>
            <li><a href="#Положение дворянства и крестьян">Положение дворянства и крестьян</a></li>
            <li><a href="#Национальная политика">Национальная политика</a></li>
            <li><a href="#Заговоры и внутренние волнения">Заговоры и внутренние волнения</a></li>
            <li><a href="#Итоги">Итоги</a></li>
        </ul>
    )
}

function ForeignBlock() {
    return (
        <ul>
            <li><a href="#Разделы Речи Посполитой">Разделы Речи Посполитой</a></li>
            <li><a href="#Русско-Турецкие войны">Русско-Турецкие войны</a></li>
            <li><a href="#Отношения с Грузией и Персией">Отношения с Грузией и Персией</a></li>
            <li><a href="#Отношения со Швецией">Отношения со Швецией</a></li>
            <li><a href="#Отношения с другими странами">Отношения с другими странами</a></li>
            <li><a href="#Итоги">Итоги</a></li>
        </ul>
    )
}

function AboutBlock() {
    return ""
}