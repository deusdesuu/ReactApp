import "./styles/pages.css"


export default function Feedback() {
    return (
        <div className="divType3">
            <h1>Если вы обнаружили несоответствие - дайте знать</h1>
            <TextBox />
        </div>
    )
}

function TextBox() {
    return (
        <form class="feedback-container" id="feedback-container">
                <textarea type="text" id="textbox" class="feedback-textarea" placeholder="Not implemented yet....."/>
                <button class="feedback-submit" type="submit">Отправить</button>
        </form>
    )
}