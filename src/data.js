const CPU = [{
    id: 0, manu: 'intel', title: '인텔 코어i5-12세대 12600K (엘더레이크)', nano: 10, core: 10,
    thread: 16, clock: 3.7, boostClock: 4.9, tdp: 125, memo: ['ddr4', 'ddr5'], pcie: [5.0, 4.0], igpu: 'UHD770',
    price: 393600, socket: '1700', imgl: require('./imgs/cpu.0.jpg'), cnt: 1, kinds: 'cpu'
},
{
    id: 1, manu: 'intel', title: '인텔 코어i5-11세대 11400 (로켓레이크S)', nano: 14, core: 6,
    thread: 12, clock: 2.6, boostClock: 4.4, tdp: 65, memo: ['ddr4'], pcie: [4.0], igpu: 'UHD730',
    price: 221600, socket: '1200', imgl: require('./imgs/cpu.1.jpg'), cnt: 0, kinds: 'cpu'
},
{
    id: 2, manu: 'intel', title: '인텔 코어i5-10세대 10400F (코멧레이크S)', nano: 14, core: 6,
    thread: 12, clock: 2.9, boostClock: 4.3, tdp: 65, memo: ['ddr4'], pcie: [3.0], igpu: null,
    price: 178220, socket: '1200', imgl: require('./imgs/cpu.2.jpg'), cnt: 0, kinds: 'cpu'
},
{
    id: 3, manu: 'amd', title: 'AMD 라이젠7-4세대 5800X (버미어)', nano: 7, core: 8,
    thread: 16, clock: 3.8, boostClock: 4.7, tdp: 105, memo: ['ddr4'], pcie: [4.0], igpu: null,
    price: 452350, socket: 'AM4', imgl: require('./imgs/cpu.3.jpg'), cnt: 0, kinds: 'cpu'
},
{
    id: 4, manu: 'amd', title: 'AMD 라이젠5-3세대 3600 ', nano: 7, core: 6,
    thread: 12, clock: 3.6, boostClock: 4.2, tdp: 65, memo: ['ddr4'], pcie: [4.0], igpu: null,
    price: 260930, socket: 'AM4', imgl: require('./imgs/cpu.4.jpg'), cnt: 0, kinds: 'cpu'
}
]

const RAM = [{
    id: 5, manu: 'samsung', title: '삼성전자 DDR4-3200 (16GB)', bandwidth: 3200, type: 'ddr4', price: 84900
    , volume: 16, imgl: require('./imgs/ram.0.jpg'), cnt: 1, kinds: 'ram'
},
{
    id: 6, manu: 'samsung', title: '삼성전자 DDR4-3200 (8GB)', bandwidth: 3200, type: 'ddr4', price: 42900
    , volume: 8, imgl: require('./imgs/ram.1.jpg'), cnt: 0, kinds: 'ram'
},
{
    id: 7, manu: 'adata', title: 'ADATA DDR5-4800 CL40 (16GB)', bandwidth: 4800, type: 'ddr5', price: 217260
    , volume: 16, imgl: require('./imgs/ram.2.jpg'), cnt: 0, kinds: 'ram'
},
{
    id: 8, manu: 'pny', title: 'PNY DDR5-4800 Performance 제이씨현 (8GB)', bandwidth: 4800, type: 'ddr5', price: 135420
    , volume: 8, imgl: require('./imgs/ram.3.jpg'), cnt: 0, kinds: 'ram'
},
{
    id: 9, manu: 'samsung', title: '삼성전자 DDR4-2666 (8GB)', bandwidth: 2666, type: 'ddr4', price: 45690
    , volume: 8, imgl: require('./imgs/ram.4.jpg'), cnt: 0, kinds: 'ram'
}
]

const SSD = [
    {
        id: 10, volume: 250, manu: 'samsung', title: '삼성전자 980 M.2 NVMe (250GB)', pcie: 3,
        stype: 'nvme', price: 63070, size: null, memo: null, imgl: require('./imgs/ssd.0.jpg'), cnt: 1, kinds: 'ssd'
    },
    {
        id: 11, volume: 500, manu: 'samsung', title: '삼성전자 970 EVO Plus M.2 NVMe (500GB)', pcie: 3,
        stype: 'nvme', price: 98050, size: null, memo: true, imgl: require('./imgs/ssd.1.jpg'), cnt: 0, kinds: 'ssd'
    },
    {
        id: 12, volume: 500, manu: 'samsung', title: '삼성전자 870 EVO (500GB)', pcie: null,
        stype: 'sata', price: 87330, size: 2.5, memo: true, imgl: require('./imgs/ssd.2.jpg'), cnt: 0, kinds: 'ssd'
    },
    {
        id: 13, volume: 500, manu: 'sk', title: 'SK하이닉스 Gold S31 (500GB)', pcie: 3,
        stype: 'nvme', price: 67410, size: null, memo: true, imgl: require('./imgs/ssd.3.jpg'), cnt: 0, kinds: 'ssd'
    }
]

const mainBoard = [{
    id: 14, manu: 'asus', title: 'ASUS PRIME X570-PRO/CSM 대원CTS', ddr: 'ddr4', ramSlot: 4, pcie: 4, pcieSlot: 3,
    m2Slot: 2, sataSlot: 4, socket: 'AM4', boardKinds: 'B550M', cnt: 0, kinds: 'main', price: 123060, imgl: require('./imgs/main.0.jpg')
},
{
    id: 15, manu: 'asus', title: 'ASUS PRIME B550M-A 대원CTS', ddr: 'ddr4', ramSlot: 4, pcie: 4, pcieSlot: 6,
    m2Slot: 2, sataSlot: 6, socket: 'AM4', boardKinds: 'X570', cnt: 0, kinds: 'main', price: 304220, imgl: require('./imgs/main.1.jpg')
},
{
    id: 16, manu: 'asus', title: 'ASUS ROG STRIX B660-I GAMING WIFI 코잇', ddr: 'ddr5', ramSlot: 2, pcie: 4, pcieSlot: 1,
    m2Slot: 2, sataSlot: 4, socket: '1700', boardKinds: 'B660', cnt: 0, kinds: 'main', price: 263060, imgl: require('./imgs/main.2.jpg')
},
{
    id: 17, manu: 'asus', title: 'ASUS ROG MAXIMUS Z690 HERO 코잇', ddr: 'ddr5', ramSlot: 4, pcie: 5, pcieSlot: 3,
    m2Slot: 5, sataSlot: 6, socket: '1700', boardKinds: 'B660', cnt: 0, kinds: 'main', price: 786520, imgl: require('./imgs/main.3.jpg')
},
{
    id: 18, manu: 'asus', title: 'ASUS PRIME B660M-K D4 인텍앤컴퍼니', ddr: 'ddr4', ramSlot: 4, pcie: 4, pcieSlot: 3,
    m2Slot: 2, sataSlot: 4, socket: '1700', boardKinds: 'B660', cnt: 0, kinds: 'main', price: 149930, imgl: require('./imgs/main.4.jpg')
},
{
    id: 19, manu: 'asus', title: 'ASUS PRIME B560M-A 코잇', ddr: 'ddr4', ramSlot: 4, pcie: 4, pcieSlot: 3,
    m2Slot: 3, sataSlot: 6, socket: '1200', boardKinds: 'B560', cnt: 0, kinds: 'main', price: 119310, imgl: require('./imgs/main.5.jpg')
}
]

const HDD = [
    {
        id: 20, manu: 'WD', title: 'Western Digital WD BLUE 7200/256M (WD20EZBX, 2TB)', price: 60420, cnt: 0, imgl: require('./imgs/hdd.0.jpg'),
        volume: 2, kinds: 'hdd'
    },
    {
        id: 21, manu: 'WD', title: 'Western Digital WD BLUE 7200/64M (WD10EZEX, 1TB)', price: 52000, cnt: 0, imgl: require('./imgs/hdd.1.jpg'),
        volume: 1, kinds: 'hdd'
    }
]

const cCase = [
    {
        id: 22, manu: 'NCORE', title: '앱코 NCORE 베놈 식스LED 강화유리 (블랙)', price: 33920, cnt: 0, imgl: require('./imgs/case.0.jpg'),
        volume: 'middletower', kinds: 'case'
    },
    {
        id: 23, manu: 'NCORE', title: '앱코 SUITMASTER P1000 강화유리 (블랙)', price: 56180, cnt: 0, imgl: require('./imgs/case.1.jpg'),
        volume: 'middletower', kinds: 'case'
    },
]

const cooler = [

    {
        id: 24, manu: 'DEEPCOOL', title: 'DEEPCOOL AK620', price: 78280, cnt: 0, kinds: 'cooler', imgl: require('./imgs/cooler.0.jpg'),
        coolerSys: 'air', fans: 2
    },
    {
        id: 25, manu: 'zalman', title: '잘만 CNPS10X PERFORMA BLACK', price: 40320, cnt: 0, kinds: 'cooler', imgl: require('./imgs/cooler.1.jpg'),
        coolerSys: 'air', fans: 1
    },
    {
        id: 26, manu: 'ENERMAX', title: '에너맥스 LIQMAX III ARGB 360 (블랙)', price: 121990, cnt: 0, kinds: 'cooler', imgl: require('./imgs/cooler.2.jpg'),
        coolerSys: 'water', fans: 3
    }
]

const POWER = [
    {
        id: 27, manu: 'GreatWall', title: 'GreatWall B650H 80PLUS BRONZE 230V EU', price: 61000, cnt: 0, kinds: 'power', imgl: require('./imgs/power.0.jpg'),
        volt: 650, gua: 'bronze', module: 'none',
    },
    {
        id: 28, manu: 'micronics', title: '마이크로닉스 COOLMAX EXPLORER 750W 80Plus Gold 230V EU 풀모듈러', price: 88510, cnt: 0, kinds: 'power', imgl: require('./imgs/power.1.jpg'),
        volt: 750, gua: 'gold', module: 'full',
    },
    {
        id: 29, manu: 'micronics', title: '마이크로닉스 Classic II 풀체인지 500W 80PLUS 230V EU', price: 46020, cnt: 0, kinds: 'power', imgl: require('./imgs/power.2.jpg'),
        volt: 500, gua: 'standard', module: 'none',
    },
    {
        id: 30, manu: 'micronics', title: '마이크로닉스 COOLMAX EXPLORER 850W 80Plus Gold 230V EU 풀모듈러', price: 105940, cnt: 0, kinds: 'power', imgl: require('./imgs/power.3.jpg'),
        volt: 850, gua: 'gold', module: 'full',
    }
]

const GPU = [

    {
        id: 31, chipManu: 'nvidia', chipModel: 'gtx30', chipNumber: 'gtx3060', title: 'MSI 지포스 RTX 3060 게이밍 X D6 12GB 트윈프로져8', manu: 'msi', price: 875000, imgl: require('./imgs/gpu.0.jpg'),
        nano: 8, cnt: 0, memory: 12, kinds: 'gpu', fans: 2
    },
    {
        id: 32, chipManu: 'nvidia', chipModel: 'gtx30', chipNumber: 'gtx3060Ti', title: '이엠텍 지포스 RTX 3060 Ti STORM X Dual OC D6 8GB', manu: 'emtek', price: 1033050, imgl: require('./imgs/gpu.1.jpg'),
        nano: 8, cnt: 0, memory: 12, kinds: 'gpu', fans: 2
    },
    {
        id: 33, chipManu: 'nvidia', chipModel: 'gtx30', chipNumber: 'gtx3070', title: 'MSI 지포스 RTX 3070 게이밍 Z 트리오 D6 8GB 트라이프로져2 LHR', manu: 'msi', price: 12299300, imgl: require('./imgs/gpu.2.jpg'),
        nano: 8, cnt: 0, memory: 8, kinds: 'gpu', fans: 3
    },
    {
        id: 34, chipManu: 'nvidia', chipModel: 'gtx30', chipNumber: 'gtx3070Ti', title: '이엠텍 지포스 RTX 3070 Ti BLACK EDITION D6X 8GB', manu: 'emtek', price: 1256700, imgl: require('./imgs/gpu.3.jpg'),
        nano: 8, cnt: 0, memory: 8, kinds: 'gpu', fans: 3
    },
    {
        id: 35, chipManu: 'nvidia', chipModel: 'gtx30', chipNumber: 'gtx3080', title: 'MSI 지포스 RTX 3080 슈프림 X D6X 10GB 트라이프로져2S LHR', manu: 'msi', price: 1735000, imgl: require('./imgs/gpu.4.jpg'),
        nano: 8, cnt: 0, memory: 8, kinds: 'gpu', fans: 3
    },
    {
        id: 36, chipManu: 'amd', chipModel: 'rx6', chipNumber: 'rx6600xt', title: 'GIGABYTE 라데온 RX 6600 XT Gaming OC D6 8GB 제이씨현', manu: 'gigabyte', price: 798750, imgl: require('./imgs/gpu.4.jpg'),
        nano: 7, cnt: 0, memory: 8, kinds: 'gpu', fans: 2
    },
    {
        id: 37, chipManu: 'amd', chipModel: 'rx6', chipNumber: 'rx6800xt', title: 'MSI 라데온 RX 6800 XT 게이밍 X 트리오 D6 16GB 트라이프로져2', manu: 'msi', price: 1491000, imgl: require('./imgs/gpu.5.jpg'),
        nano: 7, cnt: 0, memory: 16, kinds: 'gpu', fans: 3
    }
]

export { CPU, RAM, SSD, mainBoard, HDD, cCase, cooler, POWER, GPU };
