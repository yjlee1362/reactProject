const CPU = [{
    id: 0, manu: 'intel', title: '인텔 코어i5-12세대 12600K (엘더레이크)', nano: 10, core: 10,
    thread: 16, clock: 3.7, boostClock: 4.9, tdp: 125, memo: ['ddr4', 'ddr5'], pcie: [5.0, 4.0], igpu: 'UHD770',
    price: 393600, socket: 1700, imgl: `./imgs./cpu.0,` ,cnt : 1 , kinds : 'cpu'
},
{
    id: 1, manu: 'intel', title: '인텔 코어i5-11세대 11400 (로켓레이크S)', nano: 14, core: 6,
    thread: 12, clock: 2.6, boostClock: 4.4, tdp: 65, memo: ['ddr4'], pcie: [4.0], igpu: 'UHD730',
    price: 221600, socket: 1200, imgl: `./imgs./cpu.1`,cnt : 0, kinds : 'cpu'
},
{
    id: 2, manu: 'intel', title: '인텔 코어i5-10세대 10400F (코멧레이크S)', nano: 14, core: 6,
    thread: 12, clock: 2.9, boostClock: 4.3, tdp: 65, memo: ['ddr4'], pcie: [3.0], igpu: null,
    price: 178220, socket: 1200, imgl: `./imgs./cpu.2`,cnt : 0, kinds : 'cpu'
},
{
    id: 3, manu: 'amd', title: 'AMD 라이젠7-4세대 5800X (버미어)', nano: 7, core: 8,
    thread: 16, clock: 3.8, boostClock: 4.7, tdp: 105, memo: ['ddr4'], pcie: [4.0], igpu: null,
    price: 452350, socket: 'AM4', imgl: `./imgs./cpu.3`,cnt : 0, kinds : 'cpu'
},
{
    id: 4, manu: 'amd', title: 'AMD 라이젠5-3세대 3600 ', nano: 7, core: 6,
    thread: 12, clock: 3.6, boostClock: 4.2, tdp: 65, memo: ['ddr4'], pcie: [4.0], igpu: null,
    price: 260930, socket: 'AM4', imgl: `./imgs./cpu.4`,cnt : 0, kinds : 'cpu'
}
]

const RAM = [{
    id: 5, manu: 'samsung', title: '삼성전자 DDR4-3200 (16GB)', bandwidth: 3200, type: 'ddr4', price: 84900
    , volume: 16, imgl: `./imgs./ram.0`,cnt : 1 , kinds : 'ram'
},
{
    id: 6, manu: 'samsung', title: '삼성전자 DDR4-3200 (8GB)', bandwidth: 3200, type: 'ddr4', price: 42900
    , volume: 8, imgl: `./imgs./ram.1`,cnt : 0, kinds : 'ram'
},
{
    id: 7, manu: 'adata', title: 'ADATA DDR5-4800 CL40 (16GB)', bandwidth: 4800, type: 'ddr5', price: 217260
    , volume: 16, imgl: `./imgs./ram.2`,cnt : 0, kinds : 'ram'
},
{
    id: 8, manu: 'pny', title: 'PNY DDR5-4800 Performance 제이씨현 (8GB)', bandwidth: 4800, type: 'ddr5', price: 135420
    , volume: 8, imgl: `./imgs./ram.3`,cnt : 0, kinds :'ram'
},
{
    id: 9, manu: 'samsung', title: '삼성전자 DDR4-2666 (8GB)', bandwidth: 2666, type: 'ddr4', price: 45690
    , volume: 8, imgl: `./imgs./ram.4`,cnt : 0, kinds : 'ram'
}
]

const SSD = [
    {
        id: 10, volume: 250, manu: 'samsung', title: '삼성전자 980 M.2 NVMe (250GB)', pcie: 3,
        stype: 'nvme', price: 63070, size: null, memo: null, imgl: `./imgs./ssd.0}`,cnt : 1, kinds : 'ssd'
    },
    {
        id: 11, volume: 500, manu: 'samsung', title: '삼성전자 970 EVO Plus M.2 NVMe (500GB)', pcie: 3,
        stype: 'nvme', price: 98050, size: null, memo: true, imgl: `./imgs./ssd.$1`,cnt : 0, kinds : 'ssd'
    },
    {
        id: 12, volume: 500, manu: 'samsung', title: '삼성전자 870 EVO (500GB)', pcie: null,
        stype: 'sata', price: 87330, size: 2.5, memo: true, imgl: `./imgs./ssd.2`,cnt : 0, kinds : 'ssd'
    },
    {
        id: 13, volume: 500, manu: 'sk', title: 'SK하이닉스 Gold S31 (500GB)', pcie: 3,
        stype: 'nvme', price: 67410, size: null, memo: true, imgl: `./imgs./ssd.3`,cnt : 0, kinds : 'ssd'
    }
]


export { CPU, RAM, SSD };