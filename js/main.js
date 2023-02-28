const PD_layout_attr = {
    wrapperType: undefined,
    pdColPc: undefined,
    flexWrap: undefined,
    pdDirection: undefined,
    pdBr: undefined,
    pdPadding: undefined,
    $pdTa: undefined,
    // 主圖
    pdImg: undefined,

    // 特標
    pdH3Bg: undefined,
    pdH3Br: undefined,
    pdH3Fw: undefined,
};

// 获取对应的 HTML 元素
let PD_layout = document.querySelectorAll(".PD_layout");

// 字串加工
function toVariables(str) {
    return "--" + str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// 将属性值设置为 css 變數变量
function setProperty(key, val, index) {
    PD_layout[index].style.setProperty(toVariables(key), val);
}

PD_layout.forEach((ele, index) => {
    for (let key in PD_layout_attr) {
        // 读取 data-* 属性值
        let val = ele.dataset[key];

        val !== undefined ? setProperty(key, val, index) : false;
    }
});
