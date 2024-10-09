//  Dispara eventos ao clclar no grafico 
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Você clicou em ${card.querySelector('h2').innerText}`);
    });
});
// // Gráfico Refugo
// const ctxRefugo = document.getElementById('refugoChart').getContext('2d');
// const refugoChart = new Chart(ctxRefugo, {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
//         datasets: [{
//             label: 'Refugo',
//             data: [12, 19, 3, 5, 2],
//             backgroundColor: 'rgba(0, 0, 255, 1)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// // Gráfico VLP
// const ctxVLP = document.getElementById('vlpChart').getContext('2d');
// const vlpChart = new Chart(ctxVLP, {
//     type: 'line',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
//         datasets: [{
//             label: 'VLP',
//             data: [15, 25, 20, 30, 22],
//             fill: false,
//             borderColor: 'rgba(54, 162, 235, 1)',
//             tension: 0.1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// Gráfico FTT
const ctxFTT = document.getElementById('fttChart').getContext('2d');
const fttChart = new Chart(ctxFTT, {
    type: 'bar',
    data: {
        labels: ['Result', 'Target'],
        datasets: [{
            label: 'Result',
            data: [99.94, 95],
            backgroundColor: [
                'rgba(75, 192, 192, 0.4)',
                'rgba(255, 206, 86, 0.4)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Gráfico OEE
const ctxOEE = document.getElementById('oeeChart').getContext('2d');
const oeeChart = new Chart(ctxOEE, {
    type: 'bar',
    data: {
        labels: ['Result', 'Target'],
        datasets: [{
            label: 'Result',
            data: [86.40, 85],
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
                'rgba(90, 153, 255, 0.2)'
            ],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// const ctxAuxiliaryMaterial = document.getElementById('MaterialAuxiliarChart').getContext('2d');

// const auxiliaryMaterialChart = new Chart(ctxAuxiliaryMaterial, {
//     type: 'bar', // Tipo de gráfico 3D
//     data: {
//         labels: ['Material A', 'Material B', 'Material C', 'Material D', 'Material E'],
//         datasets: [{
//             label: 'Quantidade de Material Auxiliar',
//             data: [50, 70, 40, 90, 60],
//             backgroundColor: 'rgba(153, 102, 255, 0.5)',
//             borderColor: 'rgba(153, 102, 255, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Materiais'
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Quantidade',
//                 },
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             tooltip: {
//                 callbacks: {
//                     label: function (tooltipItem) {
//                         return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
//                     }
//                 }
//             }
//         }
//     }
// });


