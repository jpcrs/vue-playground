import Vue from 'vue';

export const loadData = async ({commit}) => {
    let response = await Vue.http.get('data.json');
    let data = await response.json();
    if(data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
            stockPortfolio,
            funds
        }

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio)
    }
}