let data = ["98% Cotton", "1% Polyester",
                    "1% Rayon"];
        let list =
            document.getElementById("myList");
 
        data.forEach((item) => {
            let li =
                document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });