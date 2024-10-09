//  Dispara eventos ao clclar no grafico 
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Você clicou em ${card.querySelector('h2').innerText}`);
    });
});// Gráfico Refugo
const ctxRefugo = document.getElementById('refugoChart').getContext('2d');
const refugoChart = new Chart(ctxRefugo, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5'], // Supondo 5 categorias ou períodos
        datasets: [
            {
                label: 'GAP',
                data: [-1904.66, -19755.42, -61008.68, 3955.37, 7948.32],
                fill: false,
                borderColor: 'rgba(0, 0, 255, 1)',
                tension: 0.1,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 0, 255, 1)'
            },
            {
                label: 'Target',
                data: [0, 0, 0, 0, 0], // Target constante em 0
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Valores de GAP'
                },
                beginAtZero: false // Permitir que a escala comece em um valor negativo se necessário
            },
            x: {
                title: {
                    display: true,
                    text: 'Categorias'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});


// Gráfico VLP
const ctxVLP = document.getElementById('vlpChart').getContext('2d');
const vlpChart = new Chart(ctxVLP, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5'], // Supondo 5 categorias ou períodos
        datasets: [
            {
                label: 'Resultados',
                data: [8.04, 5.85, 5.65, 10.31, 5.72],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Meta',
                data: [0.01, 0.01, 0.01, 0.01, 0.01], // Meta constante
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valores'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Categorias'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});


// Gráfico FTT
const ctxFTT = document.getElementById('fttChart').getContext('2d');
const fttChart = new Chart(ctxFTT, {
    type: 'bar',
    data: {
        labels: ['Result', 'Target'],
        datasets: [{
            label: 'Result',
            data: [(99.92 + 99.76 + 99.81 + 99.85 + 99.86 + 99.86) / 6, 95],
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
            data: [(87.15 + 87.15 + 86.92 + 86.29 + 86.29 + 86.29) / 6, 85],
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


