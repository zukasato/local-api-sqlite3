const searchModule2 =(() => {
    const BASE_URL = "http://localhost:3000/api/v2/search-date"

    return{
        searchDays : async () => {
            //検索窓への入力値を取得

            const query = document.querySelector('.day').value
            document.querySelector('.day').value

            
            const res = await fetch(BASE_URL + '?q=' + query)
            const result = await res.json()

            let body = ""

            for (let i=0; i < result.length; i++){
                const user = result[i]
                body += `<tr>
                            <td>${user.class}</td>
                            <td>${user.last_name}</td>
                            <td>${user.first_name}</td>
                            <td>${user.temperature}</td>
                            <td>${user.attendance}</td>
                            <td>${user.feelings}</td>
                            <td>${user.reason}</td>
                            <td>${user.other_reason}</td>
                            <td>${user.date}</td>
                        </tr>`
            }
            document.getElementById('users-table').innerHTML = body
        }
    }
})()
