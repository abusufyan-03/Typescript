let sub: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'aisle';

const orders = ['12', '20', '28', '42']
let currentOrder: string | undefined;
for (const order of orders) {
    if(order === '28'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder)