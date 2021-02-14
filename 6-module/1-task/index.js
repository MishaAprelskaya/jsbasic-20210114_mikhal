/* eslint-disable indent */

export default class UserTable {

	constructor(rows) {
		this.rows = rows;
		console.log(this.rows);
		this.elem = document.createElement("table");

		let tbody = document.createElement("tbody");

		this.elem.appendChild(tbody);

		for (let i = 0; i < rows.length; i++) {

			let tr = document.createElement("tr");

			for (let item in rows[i]) {
				let td = document.createElement("td");
				td.innerHTML = rows[i][item];
				tr.appendChild(td);
			}

			let td = document.createElement("td");
			td.innerHTML = '<button> X </button>';

			let buttonX = td.lastChild;

			tr.appendChild(td);
			tbody.appendChild(tr);
			buttonX.addEventListener('click', () => { this.removeRow(buttonX); });
		}

	}

	removeRow(btn) {
		btn.closest('tr').remove();
	}
}
