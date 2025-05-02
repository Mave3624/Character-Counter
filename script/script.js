const Document = (
    function() {
        const Text = document.querySelector(".Text>textarea")
        const Remain = document.querySelector(".Current> span")
        const Minmuim = document.querySelector("#min")
        const Maxmuim = document.querySelector("#max")
        const Btn = document.querySelector("button")

        const Min = function() {
            let Value = Number(Minmuim.value)
            if (Value < 50) Value = 50
            return Value
        }
        const Max = function() {
            let Value = Number(Maxmuim.value)
            if (Value <= 50 || Value > 1000) Value = 1000
            return Value
        }
        const savemin = Min()
        const savemax = Max()
        Text.setAttribute("maxlength", savemax)

        Remain.textContent = savemax
        return{Text, Remain, Max, Min, Btn, Minmuim, Maxmuim, savemin, savemax}
    }
)()

const Down = (
    function() {
        Document.Btn.addEventListener('click', () => {
            if (Number(Document.Minmuim.value) > Number(Document.Maxmuim.value) || Number(Document.Minmuim.value) < 50) {
                Document.Minmuim.value = 50
                Document.Minmuim.focus()
            }
            else if (Document.Maxmuim.value > 1000) {
                Document.Maxmuim.value = 1000
                Document.Maxmuim.focus()
            }
            else {
                Document.savemax = Document.Max()
                Document.savemin = Document.Min()
                Document.Text.value = ''
                Document.Minmuim.value = ''
                Document.Maxmuim.value = ''
                Document.Remain.textContent = Document.savemax
                Document.Text.focus()
                Document.Text.style.boxShadow = 'inset 1px 1px 20px 0px rgb(255, 50, 228)'
                Document.Text.setAttribute("maxlength", Document.savemax)
            }
        })
    }
)()

const Text = (
    function() {
        Document.Text.addEventListener('keyup', (event, TextLength) => {
            TextLength = Document.Text.value.length
            Document.Remain.textContent = Document.savemax - TextLength

            if (Document.Text.focus && TextLength < Document.savemin ) {
                 Document.Text.style.boxShadow = 'inset 1px 1px 10px 0px rgb(255, 50, 50)'
            }
            else if (Document.Text.focus && TextLength >= Document.savemin ) {
                Document.Text.style.boxShadow = 'inset 1px 1px 10px 0px rgb(67, 255, 50)'
            }
            if (Document.Text.focus && TextLength === Number(Document.Text.getAttribute('maxlength'))) {
                Document.Text.style.boxShadow = 'inset 1px 1px 10px 0px rgb(255, 50, 228)'
            }
            if (Document.Text.focus && TextLength === 0) {
                Document.Text.style.boxShadow = 'inset 1px 1px 20px 0px rgb(255, 50, 228)'
            }
        })
    }
)()