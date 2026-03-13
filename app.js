/**
 * @typedef {Object} Restaurant
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {number} rating
 * @property {number} distanceKm
 * @property {string[]} scenes
 * @property {string[]} tags
 * @property {string} address
 * @property {string} contact
 * @property {string} hometownRegion
 * @property {string} taste
 * @property {string[]} reviewSnippets
 */

/**
 * @type {Restaurant[]}
 */
const RESTAURANTS = [
  {
    id: 'r1',
    name: '小北门川味冒菜',
    category: '川菜 / 冒菜',
    price: 18,
    rating: 4.7,
    distanceKm: 0.3,
    scenes: ['solo', 'late-night'],
    tags: ['学生优惠', '分量足', '下饭'],
    address: '大学城小北门商业街 B 区 102',
    contact: '138-0000-0001',
    hometownRegion: 'west',
    taste: 'spicy',
    reviewSnippets: ['汤底很香，菜品干净，性价比很高。', '晚上下课来一碗很满足。']
  },
  {
    id: 'r2',
    name: '宿舍楼下盖浇饭',
    category: '快餐 / 盖饭',
    price: 16,
    rating: 4.3,
    distanceKm: 0.1,
    scenes: ['solo', 'delivery'],
    tags: ['出餐快', '分量足', '外卖友好'],
    address: '一号宿舍楼下档口 3 号',
    contact: '138-0000-0002',
    hometownRegion: 'north',
    taste: 'heavy',
    reviewSnippets: ['下楼两分钟就能吃上。', '番茄牛腩盖饭很好吃。']
  },
  {
    id: 'r3',
    name: '南门小炒 · 家乡菜',
    category: '家常菜 / 炒菜',
    price: 32,
    rating: 4.6,
    distanceKm: 0.8,
    scenes: ['dorm'],
    tags: ['适合聚餐', '家乡味', '可拼桌'],
    address: '大学城南门美食街 2 楼',
    contact: '138-0000-0003',
    hometownRegion: 'north',
    taste: 'heavy',
    reviewSnippets: ['有很多东北菜，挺解馋的。', '三四个人点几个菜刚刚好。']
  },
  {
    id: 'r4',
    name: '图书馆旁安静咖啡馆',
    category: '咖啡 / 简餐',
    price: 36,
    rating: 4.8,
    distanceKm: 0.4,
    scenes: ['study', 'date'],
    tags: ['自习友好', '有插座', '环境安静'],
    address: '图书馆一层侧门旁',
    contact: '138-0000-0004',
    hometownRegion: 'east',
    taste: 'mild',
    reviewSnippets: ['环境很安静，适合写作业。', '桌子大，插座多。']
  },
  {
    id: 'r5',
    name: '深夜小串 · 烧烤摊',
    category: '烧烤 / 宵夜',
    price: 40,
    rating: 4.5,
    distanceKm: 1.2,
    scenes: ['late-night', 'dorm'],
    tags: ['深夜营业', '适合聚会'],
    address: '大学城东门夜市区 5 号摊',
    contact: '138-0000-0005',
    hometownRegion: 'north',
    taste: 'spicy',
    reviewSnippets: ['晚上人很多，气氛很好。', '烤鸡翅和烤豆腐推荐。']
  },
  {
    id: 'r6',
    name: '校园南门粤式汤粉',
    category: '粤菜 / 粉面',
    price: 22,
    rating: 4.4,
    distanceKm: 0.6,
    scenes: ['solo', 'delivery'],
    tags: ['汤好喝', '适合早晚餐'],
    address: '南门餐饮一条街 108',
    contact: '138-0000-0006',
    hometownRegion: 'south',
    taste: 'mild',
    reviewSnippets: ['汤底很鲜，粉也很好吃。', '不想吃太油的时候首选。']
  },
  {
    id: 'r7',
    name: '校园情侣西餐小馆',
    category: '西餐 / 意面 / 牛排',
    price: 58,
    rating: 4.6,
    distanceKm: 1.5,
    scenes: ['date'],
    tags: ['氛围好', '适合约会'],
    address: '大学城艺术广场 3 楼',
    contact: '138-0000-0007',
    hometownRegion: 'east',
    taste: 'mild',
    reviewSnippets: ['灯光氛围都不错，适合生日。', '提前预约会更好。']
  },
  {
    id: 'r8',
    name: '东门螺蛳粉',
    category: '粉面 / 广西风味',
    price: 20,
    rating: 4.5,
    distanceKm: 1.0,
    scenes: ['solo', 'delivery'],
    tags: ['重口味', '加料足', '外卖友好'],
    address: '大学城东门小吃街 28 号',
    contact: '138-0000-0008',
    hometownRegion: 'south',
    taste: 'spicy',
    reviewSnippets: ['酸笋够味，粉很 Q。', '加鸭脚和腐竹绝配。']
  },
  {
    id: 'r9',
    name: '北区食堂二楼自选',
    category: '快餐 / 自选',
    price: 15,
    rating: 4.2,
    distanceKm: 0.5,
    scenes: ['solo', 'dorm'],
    tags: ['便宜', '种类多', '出餐快'],
    address: '北区食堂二楼',
    contact: '138-0000-0009',
    hometownRegion: 'north',
    taste: 'heavy',
    reviewSnippets: ['十块钱能吃饱。', '中午人很多要早点去。']
  },
  {
    id: 'r10',
    name: '西门日式拉面',
    category: '日料 / 拉面',
    price: 38,
    rating: 4.7,
    distanceKm: 1.3,
    scenes: ['solo', 'date'],
    tags: ['汤浓', '溏心蛋', '环境好'],
    address: '大学城西门商业街 B1 层',
    contact: '138-0000-0010',
    hometownRegion: 'east',
    taste: 'mild',
    reviewSnippets: ['豚骨汤底很正。', '叉烧和笋片给得多。']
  },
  {
    id: 'r11',
    name: '南区轻食沙拉',
    category: '轻食 / 沙拉',
    price: 28,
    rating: 4.4,
    distanceKm: 0.7,
    scenes: ['solo', 'study'],
    tags: ['低卡', '可自选', '有插座'],
    address: '南区生活广场 2 楼',
    contact: '138-0000-0011',
    hometownRegion: 'east',
    taste: 'mild',
    reviewSnippets: ['减脂期常来。', '酱汁可以选，很人性化。']
  },
  {
    id: 'r12',
    name: '校门口新疆大盘鸡',
    category: '西北菜 / 大盘鸡',
    price: 45,
    rating: 4.6,
    distanceKm: 0.9,
    scenes: ['dorm', 'late-night'],
    tags: ['分量大', '适合聚餐', '皮带面'],
    address: '校门口美食城 3 楼',
    contact: '138-0000-0012',
    hometownRegion: 'west',
    taste: 'spicy',
    reviewSnippets: ['四个人吃一份刚好。', '皮带面蘸汤汁绝了。']
  },
  {
    id: 'r13',
    name: '北门重庆火锅',
    category: '川菜 / 火锅',
    price: 55,
    rating: 4.6,
    distanceKm: 1.1,
    scenes: ['dorm', 'late-night'],
    tags: ['麻辣', '适合聚餐', '深夜营业'],
    address: '北门美食街 2 楼',
    contact: '138-0000-0013',
    hometownRegion: 'west',
    taste: 'spicy',
    reviewSnippets: ['牛油锅底很香。', '宿舍聚餐常来。']
  },
  {
    id: 'r14',
    name: '校园奶茶工坊',
    category: '奶茶 / 饮品',
    price: 14,
    rating: 4.5,
    distanceKm: 0.2,
    scenes: ['solo', 'delivery'],
    tags: ['学生优惠', '外卖友好'],
    address: '宿舍区商业街 1 楼',
    contact: '138-0000-0014',
    hometownRegion: 'east',
    taste: 'mild',
    reviewSnippets: ['奶茶性价比高。', '下课顺手买一杯。']
  }
];

/**
 * @typedef {Object} CommunityPost
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * @property {string} restaurantId
 * @property {string} type
 * @property {number} likes
 * @property {string} timeAgo
 */

/**
 * @type {CommunityPost[]}
 */
const COMMUNITY_POSTS = [
  {
    id: 'p1',
    title: '图书馆闭馆后的深夜食堂，把我救活了',
    content: '期末复习到十一点多，在深夜小串和同学撸串聊天，缓解很多压力。',
    restaurantId: 'r5',
    type: 'hot',
    likes: 126,
    timeAgo: '2 小时前'
  },
  {
    id: 'p2',
    title: '一个人在校也能好好吃饭的小店推荐',
    content: '小北门川味冒菜真的很适合一个人，点一份就很满足。',
    restaurantId: 'r1',
    type: 'hot',
    likes: 98,
    timeAgo: '5 小时前'
  },
  {
    id: 'p3',
    title: '适合写作业的咖啡馆清单',
    content: '图书馆旁安静咖啡馆桌子大，插座多，背景音乐也不会太吵。',
    restaurantId: 'r4',
    type: 'latest',
    likes: 37,
    timeAgo: '1 小时前'
  }
];

/**
 * @typedef {Object} RankingItem
 * @property {string} title
 * @property {string} description
 */

/**
 * @type {RankingItem[]}
 */
const RANKINGS = [
  {
    title: '30 元以内高性价比 TOP5',
    description: '关注人均不高、吃得饱的学生党必看清单。'
  },
  {
    title: '期末周深夜食堂榜',
    description: '开到很晚、离宿舍不远的宵夜集合。'
  },
  {
    title: '自习友好咖啡馆收藏夹',
    description: '插座多、环境安静、适合写论文。'
  }
];

/**
 * @typedef {Object} AppState
 * @property {string|null} searchKeyword
 * @property {string} distanceFilter
 * @property {string} ratingFilter
 * @property {string} priceFilter
 * @property {string} sceneFilter
 * @property {string} coreFilter
 * @property {string[]} favorites
 * @property {string[]} history
 * @property {number|null} minPrice
 * @property {number|null} maxPrice
 */

/**
 * @type {AppState}
 */
const state = {
  searchKeyword: null,
  distanceFilter: 'any',
  ratingFilter: 'any',
  priceFilter: 'any',
  sceneFilter: 'any',
  coreFilter: 'food',
  favorites: [],
  history: [],
  minPrice: null,
  maxPrice: null,
  /** @type {CommunityPost[]} */
  communityPosts: [],
  /** 是否已登录 */
  userLoggedIn: false,
  /** 是否已完成学生认证（未认证不可发帖/评论） */
  userVerified: false,
  /** 登录后手机号（示例） */
  userPhone: '',
  /** 用户昵称/姓名 */
  userName: '',
  /** 用户头像（emoji 或标识） */
  userAvatar: '👤'
};

/**
 * @returns {void}
 */
function initApp() {
  state.communityPosts = COMMUNITY_POSTS.slice();
  initTabs();
  initHome();
  initCommunity();
  initHometown();
  initAI();
  initProfile();
  initAIHelper();
  initLoginUI();
  initCertification();
  initDetailBackdrop();
  initEnvGallery();
  initIntroOverlay();
}

/**
 * @returns {void}
 */
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.tab-content');

  tabs.forEach(function handleTab(tab) {
    tab.addEventListener('click', function onTabClick() {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(function reset(t) {
        t.classList.remove('active');
      });
      sections.forEach(function resetSection(section) {
        section.classList.remove('active');
      });
      tab.classList.add('active');
      const showSection = document.getElementById('tab-' + target);
      if (showSection) {
        showSection.classList.add('active');
      }
    });
  });
}

/**
 * 点击详情页外区域关闭详情页
 * @returns {void}
 */
function initDetailBackdrop() {
  const backdrop = document.getElementById('detailBackdrop');
  if (!backdrop) {
    return;
  }
  backdrop.addEventListener('click', function onBackdropClick() {
    const detailSection = document.getElementById('tab-detail');
    if (detailSection && detailSection.classList.contains('active')) {
      closeRestaurantDetail();
    }
  });
}

/** 商家环境画廊当前展示的图片列表与索引 */
var envGalleryState = { photos: [], index: 0 };

/**
 * 打开商家环境图悬浮画廊
 * @param {string[]} photos - 图片标签或 URL 列表
 * @param {number} index - 当前显示索引
 */
function openEnvGallery(photos, index) {
  envGalleryState.photos = photos;
  envGalleryState.index = index == null ? 0 : Math.max(0, Math.min(index, photos.length - 1));
  var overlay = document.getElementById('envGalleryOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
  }
  updateEnvGalleryDisplay();
}

/**
 * 关闭商家环境图悬浮画廊
 */
function closeEnvGallery() {
  var overlay = document.getElementById('envGalleryOverlay');
  if (overlay) {
    overlay.classList.add('hidden');
  }
}

/**
 * 更新画廊当前显示的图片与计数
 */
function updateEnvGalleryDisplay() {
  var current = document.getElementById('envGalleryCurrent');
  var counter = document.getElementById('envGalleryCounter');
  var photos = envGalleryState.photos;
  var index = envGalleryState.index;
  if (!current || !photos.length) {
    return;
  }
  current.textContent = photos[index] || '';
  if (counter) {
    counter.textContent = (index + 1) + ' / ' + photos.length;
  }
}

/**
 * 初始化商家环境画廊：关闭、上一张、下一张
 */
function initEnvGallery() {
  var closeBtn = document.getElementById('envGalleryClose');
  var prevBtn = document.getElementById('envGalleryPrev');
  var nextBtn = document.getElementById('envGalleryNext');
  var overlay = document.getElementById('envGalleryOverlay');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeEnvGallery);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      var n = envGalleryState.photos.length;
      if (!n) return;
      envGalleryState.index = (envGalleryState.index - 1 + n) % n;
      updateEnvGalleryDisplay();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      var n = envGalleryState.photos.length;
      if (!n) return;
      envGalleryState.index = (envGalleryState.index + 1) % n;
      updateEnvGalleryDisplay();
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeEnvGallery();
      }
    });
  }
}

/** 本地存储 key：是否已看过产品介绍 */
var INTRO_SEEN_KEY = 'campus-food-map-intro-seen';

/**
 * 产品功能介绍与使用指南：初次打开弹出，左上角关闭；我的页可再次打开
 * @returns {void}
 */
function initIntroOverlay() {
  var overlay = document.getElementById('introOverlay');
  var closeBtn = document.getElementById('introCloseBtn');
  var profileIntroBtn = document.getElementById('profileIntroBtn');

  function closeIntro() {
    if (overlay) overlay.classList.add('hidden');
    try {
      localStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch (e) {}
  }

  function openIntro() {
    if (overlay) overlay.classList.remove('hidden');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeIntro);
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeIntro();
    });
  }

  try {
    if (typeof location !== 'undefined' && location.search.indexOf('first=1') !== -1) {
      localStorage.removeItem(INTRO_SEEN_KEY);
    }
    if (!localStorage.getItem(INTRO_SEEN_KEY)) {
      openIntro();
    }
  } catch (e) {
    openIntro();
  }

  if (profileIntroBtn) {
    profileIntroBtn.addEventListener('click', openIntro);
  }
}

/**
 * 关闭店铺详情页，返回首页
 * @returns {void}
 */
function closeRestaurantDetail() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.tab-content');
  const detailSection = document.getElementById('tab-detail');
  const homeSection = document.getElementById('tab-home');
  if (!detailSection || !homeSection) {
    return;
  }
  detailSection.classList.remove('active');
  homeSection.classList.add('active');
  sections.forEach(function reset(section) {
    if (section !== homeSection) {
      section.classList.remove('active');
    }
  });
  tabs.forEach(function reset(tab) {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === 'home') {
      tab.classList.add('active');
    }
  });
}

/**
 * @returns {void}
 */
function initHome() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const distanceFilter = document.getElementById('distanceFilter');
  const ratingFilter = document.getElementById('ratingFilter');
  const sceneFilter = document.getElementById('sceneFilter');
  const priceMinRange = document.getElementById('priceMinRange');
  const priceMaxRange = document.getElementById('priceMaxRange');
  const priceRangeLabel = document.getElementById('priceRangeLabel');
  const randomButton = document.getElementById('randomButton');
  const refreshRecommendButton = document.getElementById('refreshRecommendButton');

  if (!searchInput || !searchButton) {
    return;
  }

  searchButton.addEventListener('click', function onSearchClick() {
    const value = searchInput.value.trim();
    state.searchKeyword = value || null;
    renderRestaurantList();
  });

  searchInput.addEventListener('keydown', function onSearchKeyDown(event) {
    if (event.key === 'Enter') {
      const value = searchInput.value.trim();
      state.searchKeyword = value || null;
      renderRestaurantList();
    }
  });

  if (distanceFilter) {
    distanceFilter.addEventListener('change', function onDistanceChange() {
      state.distanceFilter = distanceFilter.value;
      renderRestaurantList();
    });
  }

  if (ratingFilter) {
    ratingFilter.addEventListener('change', function onRatingChange() {
      state.ratingFilter = ratingFilter.value;
      renderRestaurantList();
    });
  }

  if (sceneFilter) {
    sceneFilter.addEventListener('change', function onSceneChange() {
      state.sceneFilter = sceneFilter.value;
      renderRestaurantList();
    });
  }

  if (randomButton) {
    randomButton.addEventListener('click', function onRandomClick() {
      const list = getFilteredRestaurants();
      if (!list.length) {
        window.alert('当前条件下没有可推荐的餐厅，可以放宽筛选试试。');
        return;
      }
      const picked = list[Math.floor(Math.random() * list.length)];
      openRestaurantDetail(picked.id, { from: 'random' });
    });
  }

  if (refreshRecommendButton) {
    refreshRecommendButton.addEventListener('click', function onRefreshClick() {
      renderTodayRecommend();
    });
  }
  if (priceMinRange && priceMaxRange && priceRangeLabel) {
    var priceRangeDual = document.getElementById('priceRangeDual');
    var priceMinLabel = document.getElementById('priceMinLabel');
    var priceMaxLabel = document.getElementById('priceMaxLabel');

    /**
     * 更新双端滑块上方悬浮价格标签的位置与文案
     */
    function updatePriceThumbLabels() {
      var min = parseFloat(priceMinRange.value);
      var max = parseFloat(priceMaxRange.value);
      if (priceMinLabel) {
        priceMinLabel.textContent = '¥' + min;
        priceMinLabel.style.left = (min / 80) * 100 + '%';
      }
      if (priceMaxLabel) {
        priceMaxLabel.textContent = '¥' + max;
        priceMaxLabel.style.left = (max / 80) * 100 + '%';
      }
    }

    /** 仅允许拖动调节：点击轨道不生效，用此变量在未拖动时恢复原值 */
    var priceSavedMin = 0;
    var priceSavedMax = 80;
    var priceDragHappened = false;
    var priceThumbDown = false;

    function syncPriceRange() {
      var min = parseFloat(priceMinRange.value);
      var max = parseFloat(priceMaxRange.value);
      if (min > max) {
        var temp = min;
        min = max;
        max = temp;
      }

      state.minPrice = min === 0 ? null : min;
      state.maxPrice = max === 80 ? null : max;

      priceMinRange.value = String(min);
      priceMaxRange.value = String(max);

      priceRangeLabel.textContent = '¥' + min + ' － ¥' + max;
      updatePriceThumbLabels();
      renderRestaurantList();
    }

    function onPriceInput() {
      if (!priceDragHappened) {
        priceMinRange.value = String(priceSavedMin);
        priceMaxRange.value = String(priceSavedMax);
        priceRangeLabel.textContent = '¥' + priceSavedMin + ' － ¥' + priceSavedMax;
        updatePriceThumbLabels();
        return;
      }
      syncPriceRange();
    }

    priceMinRange.addEventListener('input', onPriceInput);
    priceMaxRange.addEventListener('input', onPriceInput);

    function recordPriceBeforeDrag() {
      priceSavedMin = parseFloat(priceMinRange.value);
      priceSavedMax = parseFloat(priceMaxRange.value);
      priceDragHappened = false;
      priceThumbDown = true;
    }
    function onPriceMouseMove() {
      if (priceThumbDown) priceDragHappened = true;
    }
    function onPricePointerUp() {
      priceThumbDown = false;
    }
    priceMinRange.addEventListener('mousedown', recordPriceBeforeDrag);
    priceMaxRange.addEventListener('mousedown', recordPriceBeforeDrag);
    document.addEventListener('mousemove', onPriceMouseMove);
    document.addEventListener('mouseup', onPricePointerUp);
    document.addEventListener('mouseleave', onPricePointerUp);

    /** 重置滑块状态：移出或松开后不再选中任一拖动钮，点击其他位置后不再选中滑块 */
    function resetSliderThumbState() {
      priceRangeDual.classList.remove('dragging-min', 'dragging-max');
      priceMinRange.style.zIndex = '';
      priceMaxRange.style.zIndex = '';
      priceMinRange.style.pointerEvents = '';
      priceMaxRange.style.pointerEvents = '';
    }

    /** 根据鼠标 x 位置决定左/右滑块谁在上层，使移入左侧时点到的就是左侧滑块（不依赖合成事件） */
    function setSliderThumbByPosition(clientX) {
      var rect = priceRangeDual.getBoundingClientRect();
      var pct = (clientX - rect.left) / rect.width;
      pct = Math.max(0, Math.min(1, pct));
      var minVal = parseFloat(priceMinRange.value);
      var maxVal = parseFloat(priceMaxRange.value);
      var minPct = minVal / 80;
      var maxPct = maxVal / 80;
      var midPct = (minPct + maxPct) / 2;
      var wantMin = (minVal === maxVal) ? (pct < 0.5) : (pct < midPct);
      if (wantMin) {
        priceMinRange.style.zIndex = '2';
        priceMaxRange.style.zIndex = '1';
        priceMinRange.style.pointerEvents = 'auto';
        priceMaxRange.style.pointerEvents = 'none';
      } else {
        priceMinRange.style.zIndex = '1';
        priceMaxRange.style.zIndex = '2';
        priceMinRange.style.pointerEvents = 'none';
        priceMaxRange.style.pointerEvents = 'auto';
      }
    }

    if (priceRangeDual) {
      priceRangeDual.addEventListener('mousemove', function (e) {
        if (priceRangeDual.classList.contains('dragging-min') || priceRangeDual.classList.contains('dragging-max')) return;
        setSliderThumbByPosition(e.clientX);
      });
      priceRangeDual.addEventListener('mouseenter', function (e) {
        setSliderThumbByPosition(e.clientX);
      });
      priceRangeDual.addEventListener('mouseleave', resetSliderThumbState);
      document.addEventListener('mouseup', resetSliderThumbState);
      priceMinRange.addEventListener('mousedown', function () {
        priceRangeDual.classList.add('dragging-min');
      });
      priceMaxRange.addEventListener('mousedown', function () {
        priceRangeDual.classList.add('dragging-max');
      });
      priceMinRange.addEventListener('mouseup', resetSliderThumbState);
      priceMinRange.addEventListener('mouseleave', resetSliderThumbState);
      priceMaxRange.addEventListener('mouseup', resetSliderThumbState);
      priceMaxRange.addEventListener('mouseleave', resetSliderThumbState);
    }

    syncPriceRange();
  }

  initCoreTags();
  renderRestaurantList();
  renderTodayRecommend();
}

/**
 * @returns {void}
 */
function initCommunity() {
  const tabs = document.querySelectorAll('.community-tab');
  tabs.forEach(function handleTab(tab) {
    tab.addEventListener('click', function onClick() {
      const target = tab.getAttribute('data-community-tab');
      tabs.forEach(function reset(t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
      renderCommunityPosts(target === 'latest' ? 'latest' : 'hot');
    });
  });

  renderCommunityPosts('hot');
  renderCommunityRanking();
  initPostForm();
}

/**
 * 初始化「发探店」表单：填充餐厅下拉、打开/关闭弹窗、提交发布
 * @returns {void}
 */
/** 发帖表单待上传的媒体（object URL 与类型），提交或关闭时清理 */
var pendingPostMedia = [];

/**
 * 初始化「发探店」表单：填充餐厅下拉、图片/视频上传、打开/关闭弹窗、提交发布
 * @returns {void}
 */
function initPostForm() {
  var openBtn = document.getElementById('openPostFormButton');
  var overlay = document.getElementById('postFormOverlay');
  var closeBtn = document.getElementById('postFormCloseButton');
  var cancelBtn = document.getElementById('postFormCancelButton');
  var backdrop = document.getElementById('postFormBackdrop');
  var form = document.getElementById('postForm');
  var restaurantSelect = document.getElementById('postRestaurant');
  var mediaInput = document.getElementById('postMediaInput');
  var mediaPreview = document.getElementById('postMediaPreview');

  if (!restaurantSelect) {
    return;
  }
  RESTAURANTS.forEach(function addOption(r) {
    var opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = r.name;
    restaurantSelect.appendChild(opt);
  });

  /**
   * 清空待发布媒体并撤销 object URL
   */
  function clearPendingMedia() {
    pendingPostMedia.forEach(function (item) {
      if (item.url && item.url.indexOf('blob:') === 0) {
        URL.revokeObjectURL(item.url);
      }
    });
    pendingPostMedia = [];
    if (mediaPreview) {
      mediaPreview.innerHTML = '';
    }
    if (mediaInput) {
      mediaInput.value = '';
    }
  }

  /**
   * 渲染当前待上传的媒体预览
   */
  function renderMediaPreview() {
    if (!mediaPreview) {
      return;
    }
    mediaPreview.innerHTML = '';
    pendingPostMedia.forEach(function (item, index) {
      var wrap = document.createElement('div');
      wrap.className = 'preview-item';
      if (item.type === 'video') {
        var video = document.createElement('video');
        video.className = 'preview-video';
        video.src = item.url;
        video.muted = true;
        video.playsInline = true;
        video.controls = false;
        wrap.appendChild(video);
      } else {
        var img = document.createElement('img');
        img.src = item.url;
        img.alt = '预览';
        wrap.appendChild(img);
      }
      var removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'preview-remove';
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', '移除');
      removeBtn.addEventListener('click', function () {
        if (item.url && item.url.indexOf('blob:') === 0) {
          URL.revokeObjectURL(item.url);
        }
        pendingPostMedia.splice(index, 1);
        renderMediaPreview();
      });
      wrap.appendChild(removeBtn);
      mediaPreview.appendChild(wrap);
    });
  }

  if (mediaInput && mediaPreview) {
    mediaInput.addEventListener('change', function () {
      var files = mediaInput.files;
      if (!files || !files.length) {
        return;
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var url = URL.createObjectURL(file);
        var type = file.type.indexOf('video') !== -1 ? 'video' : 'image';
        pendingPostMedia.push({ url: url, type: type });
      }
      renderMediaPreview();
      mediaInput.value = '';
    });
  }

  function openForm() {
    if (overlay) {
      overlay.classList.remove('hidden');
    }
  }

  function closeForm() {
    if (overlay) {
      overlay.classList.add('hidden');
    }
    if (form) {
      form.reset();
    }
    clearPendingMedia();
  }

  if (openBtn) {
    openBtn.addEventListener('click', function () {
      if (!state.userLoggedIn) {
        window.alert('请先登录');
        var loginOverlay = document.getElementById('loginOverlay');
        if (loginOverlay) loginOverlay.classList.remove('hidden');
        return;
      }
      if (!state.userVerified) {
        window.alert('请先完成学生认证后才能参与社区发帖与评论。');
        var certOverlay = document.getElementById('certOverlay');
        if (certOverlay) certOverlay.classList.remove('hidden');
        return;
      }
      openForm();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeForm);
  }
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeForm);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeForm);
  }

  if (form) {
    form.addEventListener('submit', function onSubmit(event) {
      event.preventDefault();
      var titleInput = document.getElementById('postTitle');
      var contentInput = document.getElementById('postContent');
      var title = titleInput ? titleInput.value.trim() : '';
      var content = contentInput ? contentInput.value.trim() : '';
      if (!title || !content) {
        return;
      }
      var restaurantId = restaurantSelect ? restaurantSelect.value : '';
      var mediaUrls = pendingPostMedia.map(function (item) {
        return { url: item.url, type: item.type };
      });
      var newPost = {
        id: 'p' + Date.now(),
        title: title,
        content: content,
        restaurantId: restaurantId || '',
        type: 'latest',
        likes: 0,
        timeAgo: '刚刚',
        mediaUrls: mediaUrls
      };
      state.communityPosts.unshift(newPost);
      pendingPostMedia = [];
      closeForm();
      var communityTabs = document.querySelectorAll('.community-tab');
      communityTabs.forEach(function reset(t) {
        t.classList.remove('active');
        if (t.getAttribute('data-community-tab') === 'latest') {
          t.classList.add('active');
        }
      });
      renderCommunityPosts('latest');
    });
  }
}

/**
 * @returns {void}
 */
function initHometown() {
  const select = document.getElementById('hometownRegionSelect');
  if (!select) {
    return;
  }
  select.addEventListener('change', function onChange() {
    renderHometownRestaurants();
  });
  renderHometownRestaurants();
}

/**
 * @returns {void}
 */
function initAI() {
  const aiForm = document.getElementById('aiForm');
  const aiResetButton = document.getElementById('aiResetButton');
  if (!aiForm) {
    return;
  }

  aiForm.addEventListener('submit', function onSubmit(event) {
    event.preventDefault();
    renderAIResult();
  });

  if (aiResetButton) {
    aiResetButton.addEventListener('click', function onReset() {
      aiForm.reset();
      const budget = document.getElementById('aiBudget');
      const distance = document.getElementById('aiDistance');
      const taste = document.getElementById('aiTaste');
      const scene = document.getElementById('aiScene');
      if (budget) {
        budget.value = 'any';
      }
      if (distance) {
        distance.value = 'any';
      }
      if (taste) {
        taste.value = 'any';
      }
      if (scene) {
        scene.value = 'any';
      }
      renderAIResult();
    });
  }

  renderAIResult();
}

/**
 * 更新「我的」页账号预览（头像、姓名）
 */
function updateProfilePreview() {
  var avatarEl = document.getElementById('profileAvatarPreview');
  var nameEl = document.getElementById('profileNamePreview');
  if (avatarEl) avatarEl.textContent = state.userAvatar || '👤';
  if (nameEl) nameEl.textContent = (state.userName && state.userName.trim()) ? state.userName.trim() : '未设置姓名';
}

/**
 * 更新「我的」页收藏与最近浏览的条数文案（不展开列表）
 */
function updateProfileCounts() {
  var favCount = document.getElementById('profileFavoritesCount');
  var hisCount = document.getElementById('profileHistoryCount');
  if (favCount) favCount.textContent = state.favorites.length ? '已收藏 ' + state.favorites.length + ' 家 · 点击查看' : '暂无收藏 · 点击查看';
  if (hisCount) hisCount.textContent = state.history.length ? '共 ' + state.history.length + ' 家 · 点击查看' : '暂无浏览记录 · 点击查看';
}

/**
 * @returns {void}
 */
function initProfile() {
  updateProfilePreview();
  updateProfileCounts();

  var accountCard = document.getElementById('profileAccountCard');
  var favoritesCard = document.getElementById('profileFavoritesCard');
  var historyCard = document.getElementById('profileHistoryCard');
  var favoriteListWrap = document.getElementById('favoriteListWrap');
  var historyListWrap = document.getElementById('historyListWrap');

  if (accountCard) {
    accountCard.addEventListener('click', function () {
      openProfileEdit();
    });
    accountCard.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        accountCard.click();
      }
    });
  }

  if (favoritesCard && favoriteListWrap) {
    favoritesCard.addEventListener('click', function (e) {
      if (e.target.closest('.card')) return;
      favoriteListWrap.classList.toggle('hidden');
      if (!favoriteListWrap.classList.contains('hidden')) {
        renderFavorites();
      }
    });
  }

  if (historyCard && historyListWrap) {
    historyCard.addEventListener('click', function (e) {
      if (e.target.closest('.card')) return;
      historyListWrap.classList.toggle('hidden');
      if (!historyListWrap.classList.contains('hidden')) {
        renderHistory();
      }
    });
  }

  initProfileEdit();
}

/**
 * 打开编辑资料弹窗
 */
function openProfileEdit() {
  var overlay = document.getElementById('profileEditOverlay');
  var nameInput = document.getElementById('profileEditName');
  if (nameInput) nameInput.value = state.userName || '';
  var opts = document.querySelectorAll('.profile-avatar-opt');
  var hasActive = false;
  opts.forEach(function (btn) {
    var isCurrent = (btn.getAttribute('data-avatar') || '') === (state.userAvatar || '👤');
    btn.classList.toggle('active', isCurrent);
    if (isCurrent) hasActive = true;
  });
  if (!hasActive && opts.length) opts[0].classList.add('active');
  if (overlay) overlay.classList.remove('hidden');
}

/**
 * 初始化编辑资料弹窗：关闭、保存、头像选择
 */
function initProfileEdit() {
  var overlay = document.getElementById('profileEditOverlay');
  var closeBtn = document.getElementById('profileEditCloseBtn');
  var backdrop = document.getElementById('profileEditBackdrop');
  var saveBtn = document.getElementById('profileEditSaveBtn');
  var nameInput = document.getElementById('profileEditName');
  var avatarOptions = document.getElementById('profileAvatarOptions');

  function closeEdit() {
    if (overlay) overlay.classList.add('hidden');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeEdit);
  if (backdrop) backdrop.addEventListener('click', closeEdit);

  if (avatarOptions) {
    avatarOptions.querySelectorAll('.profile-avatar-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        avatarOptions.querySelectorAll('.profile-avatar-opt').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }

  if (saveBtn && nameInput) {
    saveBtn.addEventListener('click', function () {
      var selected = avatarOptions ? avatarOptions.querySelector('.profile-avatar-opt.active') : null;
      state.userAvatar = (selected && selected.getAttribute('data-avatar')) || state.userAvatar || '👤';
      state.userName = nameInput.value.trim();
      updateProfilePreview();
      closeEdit();
    });
  }
}

/**
 * @returns {Restaurant[]}
 */
function getFilteredRestaurants() {
  return RESTAURANTS.filter(function match(r) {
    var cat = r.category || '';
    var name = r.name || '';
    var text = (cat + name).toLowerCase();
    if (state.coreFilter === 'milk-tea') {
      if (cat.indexOf('奶茶') === -1 && name.indexOf('奶茶') === -1) return false;
    } else if (state.coreFilter === 'coffee') {
      if (cat.indexOf('咖啡') === -1 && name.indexOf('咖啡') === -1) return false;
    } else if (state.coreFilter === 'sichuan') {
      if (cat.indexOf('川菜') === -1 && cat.indexOf('川味') === -1 && name.indexOf('川') === -1) return false;
    } else if (state.coreFilter === 'hotpot') {
      if (cat.indexOf('火锅') === -1 && name.indexOf('火锅') === -1) return false;
    } else if (state.coreFilter === 'bbq') {
      if (cat.indexOf('烤肉') === -1 && cat.indexOf('烧烤') === -1 && name.indexOf('烤') === -1) return false;
    } else if (state.coreFilter === 'japanese') {
      if (cat.indexOf('日料') === -1 && cat.indexOf('拉面') === -1 && name.indexOf('日式') === -1) return false;
    } else if (state.coreFilter === 'western') {
      if (cat.indexOf('西餐') === -1 && cat.indexOf('意面') === -1 && cat.indexOf('牛排') === -1) return false;
    } else if (state.coreFilter === 'cantonese') {
      if (cat.indexOf('粤菜') === -1 && name.indexOf('粤') === -1) return false;
    } else if (state.coreFilter === 'fastfood') {
      if (cat.indexOf('快餐') === -1 && cat.indexOf('自选') === -1 && cat.indexOf('盖饭') === -1) return false;
    } else if (state.coreFilter === 'light') {
      if (cat.indexOf('轻食') === -1 && cat.indexOf('沙拉') === -1) return false;
    } else if (state.coreFilter === 'noodle') {
      if (cat.indexOf('粉面') === -1 && cat.indexOf('粉') === -1 && name.indexOf('粉') === -1 && name.indexOf('面') === -1) return false;
    }

    if (state.searchKeyword) {
      const keyword = state.searchKeyword.toLowerCase();
      const text = (r.name + r.category).toLowerCase();
      if (!text.includes(keyword)) {
        return false;
      }
    }

    if (state.distanceFilter !== 'any') {
      const limit = parseFloat(state.distanceFilter);
      if (!Number.isNaN(limit) && r.distanceKm > limit) {
        return false;
      }
    }

    if (state.ratingFilter !== 'any') {
      const minRating = parseFloat(state.ratingFilter);
      if (!Number.isNaN(minRating) && r.rating < minRating) {
        return false;
      }
    }

    if (state.minPrice !== null && r.price < state.minPrice) {
      return false;
    }
    if (state.maxPrice !== null && r.price > state.maxPrice) {
      return false;
    }

    if (state.sceneFilter !== 'any') {
      if (!r.scenes.includes(state.sceneFilter)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * @returns {void}
 */
function renderRestaurantList() {
  const container = document.getElementById('restaurantList');
  const mapContainer = document.getElementById('mapRestaurantPins');
  const countLabel = document.getElementById('restaurantCountLabel');
  if (!container || !mapContainer) {
    return;
  }

  const list = getFilteredRestaurants();
  container.innerHTML = '';
  mapContainer.innerHTML = '';

  if (countLabel) {
    countLabel.textContent = '共 ' + list.length + ' 家餐厅符合当前条件';
  }

  if (!list.length) {
    container.innerHTML =
      '<p class="muted">没有找到符合条件的餐厅，可以尝试调整筛选条件。</p>';
    return;
  }

  list.forEach(function append(r) {
    const card = document.createElement('article');
    card.className = 'restaurant-card';
    const logoLetter = r.name.charAt(0);
    card.innerHTML =
      '<div class="restaurant-logo">' +
      escapeHTML(logoLetter) +
      '</div>' +
      '<div class="restaurant-body">' +
      '<div class="restaurant-title-row">' +
      '<div class="restaurant-name">' +
      r.name +
      '</div>' +
      '<div class="restaurant-meta">⭐ ' +
      r.rating.toFixed(1) +
      '</div>' +
      '</div>' +
      '<div class="restaurant-meta">¥' +
      r.price.toFixed(0) +
      ' / 人 · ' +
      r.category +
      '</div>' +
      '<div class="restaurant-meta">距您约 ' +
      r.distanceKm.toFixed(1) +
      ' km</div>' +
      '<div class="restaurant-tags">' +
      r.tags
        .slice(0, 2)
        .map(function mapTag(tag) {
          return '<span class="tag tag-primary">' + tag + '</span>';
        })
        .join('') +
      '</div>' +
      '</div>';

    card.addEventListener('click', function onClick() {
      openRestaurantDetail(r.id, { from: 'list' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(r, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });
    container.appendChild(card);

    const pinCard = document.createElement('li');
    pinCard.className = 'map-pin-card';
    pinCard.innerHTML =
      '<div class="map-pin-title">' +
      r.name +
      '</div>' +
      '<div class="map-pin-meta">⭐ ' +
      r.rating.toFixed(1) +
      ' · ¥' +
      r.price.toFixed(0) +
      ' / 人</div>' +
      '<div class="map-pin-meta">' +
      r.category +
      '</div>';
    pinCard.addEventListener('click', function onPinClick() {
      openRestaurantDetail(r.id, { from: 'map' });
    });
    pinCard.addEventListener('mouseenter', function onEnterPin(event) {
      showAISummaryCard(r, event);
    });
    pinCard.addEventListener('mousemove', function onMovePin(event) {
      positionAISummaryCard(event);
    });
    pinCard.addEventListener('mouseleave', function onLeavePin() {
      hideAISummaryCard();
    });
    mapContainer.appendChild(pinCard);
  });
}

/**
 * @returns {void}
 */
function renderTodayRecommend() {
  const container = document.getElementById('todayRecommendList');
  if (!container) {
    return;
  }
  container.innerHTML = '';

  const shuffled = RESTAURANTS.slice().sort(function randomSort() {
    return Math.random() - 0.5;
  });
  const picks = shuffled.slice(0, 3);

  picks.forEach(function append(r) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div class="card-title">' +
      r.name +
      '</div>' +
      '<div class="card-meta">⭐ ' +
      r.rating.toFixed(1) +
      ' · ¥' +
      r.price.toFixed(0) +
      ' / 人</div>' +
      '</div>' +
      '<div class="card-meta">距您约 ' +
      r.distanceKm.toFixed(1) +
      ' km · ' +
      r.category +
      '</div>' +
      '<div class="tag-row">' +
      '<span class="tag tag-warning">今日推荐</span>' +
      r.tags
        .slice(0, 2)
        .map(function mapTag(tag) {
          return '<span class="tag">' + tag + '</span>';
        })
        .join('') +
      '</div>';

    card.addEventListener('click', function onClick() {
      openRestaurantDetail(r.id, { from: 'recommend' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(r, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });
    container.appendChild(card);
  });
}

/**
 * @param {'hot'|'latest'} type
 * @returns {void}
 */
function renderCommunityPosts(type) {
  const container = document.getElementById('communityPostList');
  if (!container) {
    return;
  }
  container.innerHTML = '';

  state.communityPosts.filter(function match(post) {
    if (type === 'latest') {
      return post.type === 'latest' || post.type === 'hot';
    }
    return post.type === 'hot';
  }).forEach(function append(post) {
    const restaurant = RESTAURANTS.find(function find(r) {
      return r.id === post.restaurantId;
    });
    var card = document.createElement('article');
    card.className = 'card';
    var mediaHtml = '';
    if (post.mediaUrls && post.mediaUrls.length) {
      mediaHtml =
        '<div class="community-card-media">' +
        post.mediaUrls
          .map(function (m) {
            if (m.type === 'video') {
              return (
                '<div class="media-video-wrap"><video src="' +
                escapeHTML(m.url) +
                '" muted playsinline controls></video></div>'
              );
            }
            return '<img src="' + escapeHTML(m.url) + '" alt="帖子图片" />';
          })
          .join('') +
        '</div>';
    }
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div>' +
      '<div class="card-title">' +
      escapeHTML(post.title) +
      '</div>' +
      '<div class="card-meta">' +
      escapeHTML(post.timeAgo) +
      '</div>' +
      '</div>' +
      '<div class="card-meta">赞 ' +
      post.likes +
      '</div>' +
      '</div>' +
      '<p class="card-meta">' +
      escapeHTML(post.content) +
      '</p>' +
      mediaHtml +
      (restaurant
        ? '<div class="tag-row"><span class="tag tag-primary">关联餐厅：' +
          escapeHTML(restaurant.name) +
          '</span></div>'
        : '');

    if (restaurant) {
      card.addEventListener('click', function onClick() {
        openRestaurantDetail(restaurant.id, { from: 'community' });
      });
    }
    card.addEventListener('mouseenter', function onEnter(event) {
      showAIPostSummaryCard(post, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });

    container.appendChild(card);
  });
}

/**
 * @returns {void}
 */
function renderCommunityRanking() {
  const container = document.getElementById('communityRankingList');
  if (!container) {
    return;
  }
  container.innerHTML = '';
  RANKINGS.forEach(function append(item) {
    const li = document.createElement('li');
    li.innerHTML =
      '<strong>' +
      item.title +
      '</strong><br/><span class="muted">' +
      escapeHTML(item.description) +
      '</span>';
    container.appendChild(li);
  });
}

/**
 * @returns {void}
 */
function renderHometownRestaurants() {
  const select = document.getElementById('hometownRegionSelect');
  const container = document.getElementById('hometownRestaurantList');
  if (!select || !container) {
    return;
  }
  container.innerHTML = '';
  const region = select.value;

  const list = RESTAURANTS.filter(function match(r) {
    if (region === 'all') {
      return true;
    }
    return r.hometownRegion === region;
  });

  if (!list.length) {
    container.innerHTML =
      '<p class="muted">暂时没有找到明显带有该地区风味的餐厅，可以换个地区看看。</p>';
    return;
  }

  list.forEach(function append(r) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div class="card-title">' +
      r.name +
      '</div>' +
      '<div class="card-meta">⭐ ' +
      r.rating.toFixed(1) +
      '</div>' +
      '</div>' +
      '<div class="card-meta">' +
      r.category +
      '</div>' +
      '<div class="tag-row">' +
      '<span class="tag tag-warning">家乡味</span>' +
      r.tags
        .slice(0, 2)
        .map(function mapTag(tag) {
          return '<span class="tag">' + tag + '</span>';
        })
        .join('') +
      '</div>';

    card.addEventListener('click', function onClick() {
      openRestaurantDetail(r.id, { from: 'hometown' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(r, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });

    container.appendChild(card);
  });
}

/**
 * @returns {void}
 */
function renderAIResult() {
  const container = document.getElementById('aiResultList');
  if (!container) {
    return;
  }
  const budgetSelect = document.getElementById('aiBudget');
  const distanceSelect = document.getElementById('aiDistance');
  const peopleSelect = document.getElementById('aiPeople');
  const tasteSelect = document.getElementById('aiTaste');
  const sceneSelect = document.getElementById('aiScene');

  const budget = budgetSelect ? budgetSelect.value : 'any';
  const distance = distanceSelect ? distanceSelect.value : 'any';
  const people = peopleSelect ? peopleSelect.value : '1';
  const taste = tasteSelect ? tasteSelect.value : 'any';
  const scene = sceneSelect ? sceneSelect.value : 'any';

  const list = RESTAURANTS.filter(function match(r) {
    if (budget !== 'any' && r.price > parseFloat(budget)) {
      return false;
    }
    if (distance !== 'any' && r.distanceKm > parseFloat(distance)) {
      return false;
    }
    if (taste !== 'any' && r.taste !== taste) {
      return false;
    }
    if (scene !== 'any' && !r.scenes.includes(scene)) {
      return false;
    }
    return true;
  });

  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML =
      '<p class="muted">根据当前条件暂时没有匹配的餐厅，可以放宽预算或距离再试一次。</p>';
    return;
  }

  list.forEach(function append(r) {
    const reasons = [];
    if (budget !== 'any' && r.price <= parseFloat(budget)) {
      reasons.push('人均在预算内');
    }
    if (distance !== 'any' && r.distanceKm <= parseFloat(distance)) {
      reasons.push('离你不远');
    }
    if (scene !== 'any' && r.scenes.includes(scene)) {
      reasons.push('适合当前场景');
    }
    if (taste !== 'any' && r.taste === taste) {
      reasons.push('口味匹配');
    }

    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div class="card-title">' +
      r.name +
      '</div>' +
      '<div class="card-meta">⭐ ' +
      r.rating.toFixed(1) +
      ' · ¥' +
      r.price.toFixed(0) +
      ' / 人</div>' +
      '</div>' +
      '<div class="card-meta">' +
      r.category +
      '</div>' +
      '<div class="tag-row">' +
      '<span class="tag tag-warning">AI 推荐</span>' +
      reasons
        .map(function mapReason(text) {
          return '<span class="tag tag-success">' + text + '</span>';
        })
        .join('') +
      '</div>';

    card.addEventListener('click', function onClick() {
      openRestaurantDetail(r.id, { from: 'ai' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(r, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });

    container.appendChild(card);
  });
}

/**
 * @param {string} id
 * @param {{from?: string}} [options]
 * @returns {void}
 */
function openRestaurantDetail(id, options) {
  const restaurant = RESTAURANTS.find(function find(r) {
    return r.id === id;
  });
  if (!restaurant) {
    return;
  }

  if (!state.history.includes(id)) {
    state.history.unshift(id);
    if (state.history.length > 10) {
      state.history.pop();
    }
    renderHistory();
  }

  const container = document.getElementById('restaurantDetailPage');
  const sections = document.querySelectorAll('.tab-content');
  if (!container) {
    return;
  }

  var envPhotos = getShopEnvPhotos(restaurant.id);
  var reviews = getShopReviews(restaurant);
  var envGridPhotos = envPhotos.slice(0, 6);
  var envGridHtml = envGridPhotos
    .map(function (label, idx) {
      return (
        '<div class="detail-env-photo" data-env-index="' + idx + '" role="button" tabindex="0">' +
        '<div class="detail-env-photo-inner">' +
        escapeHTML(label) +
        '</div></div>'
      );
    })
    .join('');
  var dishes = getDetailDishes(restaurant.id);
  var dishesHtml = dishes
    .map(function (d) {
      return (
        '<div class="detail-dish-card">' +
        '<div class="detail-dish-img-wrap">' +
        '<img src="' + escapeHTML(d.image) + '" alt="" class="detail-dish-img" />' +
        '</div>' +
        '<div class="detail-dish-info">' +
        '<span class="detail-dish-name">' + escapeHTML(d.name) + '</span>' +
        '<span class="detail-dish-price">¥' + d.price + '</span>' +
        '</div></div>'
      );
    })
    .join('');
  var reviewsHtml = reviews
    .map(function (r) {
      var stars = '★'.repeat(Math.round(r.rating)) + '☆'.repeat(5 - Math.round(r.rating));
      var imgs = (r.images && r.images.length)
        ? '<div class="detail-review-images">' +
          r.images.map(function (src) {
            return '<img src="' + escapeHTML(src) + '" alt="评价图" class="detail-review-img" />';
          }).join('') +
          '</div>'
        : '';
      return (
        '<div class="detail-review-item">' +
        '<div class="detail-review-avatar">' +
        escapeHTML(r.userName.charAt(0)) +
        '</div>' +
        '<div class="detail-review-body">' +
        '<div class="detail-review-head">' +
        '<span class="detail-review-user">' + escapeHTML(r.userName) + '</span>' +
        '<span class="detail-review-stars">' + stars + '</span>' +
        '<span class="detail-review-time">' + escapeHTML(r.timeAgo) + '</span>' +
        '</div>' +
        '<p class="detail-review-content">' + escapeHTML(r.content) + '</p>' +
        imgs +
        '</div></div>'
      );
    })
    .join('');

  container.innerHTML =
    '<div class="detail-meituan-header">' +
    '<div class="detail-page-header-main">' +
    '<div class="detail-page-logo">' + escapeHTML(restaurant.name.charAt(0)) + '</div>' +
    '<div class="detail-page-title-block">' +
    '<h2 class="detail-title">' + restaurant.name + '</h2>' +
    '<p class="detail-page-subtitle">' + restaurant.category + '</p>' +
    '<div class="detail-tags-inline">' +
    restaurant.tags.slice(0, 4).map(function (t) {
      return '<span class="tag tag-primary">' + escapeHTML(t) + '</span>';
    }).join('') +
    '</div></div></div>' +
    '<div class="detail-page-header-meta">' +
    '<div class="detail-meta-item">⭐ ' + restaurant.rating.toFixed(1) + '</div>' +
    '<div class="detail-meta-item">人均 ¥' + restaurant.price.toFixed(0) + '</div>' +
    '<div class="detail-meta-item">' + restaurant.distanceKm.toFixed(1) + ' km</div>' +
    '</div></div>' +
    '<div class="detail-section">' +
    '<h3 class="detail-section-title">适合场景</h3>' +
    '<div class="tag-row">' +
    restaurant.scenes.map(function (scene) {
      return '<span class="tag tag-success">' + mapSceneLabel(scene) + '</span>';
    }).join('') +
    '</div></div>' +
    '<div class="detail-section">' +
    '<h3 class="detail-section-title">商家环境</h3>' +
    '<p class="panel-desc" style="margin-bottom:8px;">点击图片可查看更多环境图</p>' +
    '<div class="detail-env-grid detail-env-grid-clickable">' + envGridHtml + '</div>' +
    '</div>' +
    '<div class="detail-section">' +
    '<div class="detail-tab-bar">' +
    '<button type="button" class="detail-tab-btn active" data-detail-tab="dishes">热门菜品</button>' +
    '<button type="button" class="detail-tab-btn" data-detail-tab="reviews">用户评价</button>' +
    '</div>' +
    '<div id="detailTabDishes" class="detail-tab-panel detail-tab-panel-active">' +
    '<div class="detail-dishes-grid">' + dishesHtml + '</div>' +
    '</div>' +
    '<div id="detailTabReviews" class="detail-tab-panel">' +
    '<div class="detail-reviews-list">' + reviewsHtml + '</div>' +
    '</div></div>' +
    '<div class="detail-section">' +
    '<h3 class="detail-section-title">地址与联系方式</h3>' +
    '<div class="detail-meta-row">' +
    '<span>地址：' + escapeHTML(restaurant.address) + '</span>' +
    '<span>电话：' + escapeHTML(restaurant.contact) + '</span>' +
    '</div></div>' +
    '<div class="detail-section">' +
    '<div class="detail-bottom-actions">' +
    '<button class="primary-button" data-action="takeaway">外卖点这家</button>' +
    '<button class="secondary-button" data-action="navigate">导航去这家</button>' +
    '<button class="secondary-button" data-action="favorite">' +
    (state.favorites.includes(restaurant.id) ? '取消收藏' : '收藏') + '</button>' +
    (options && options.from ? '<span class="detail-pill">来自 ' + mapSourceLabel(options.from) + ' 的推荐</span>' : '') +
    '</div>' +
    '<p class="muted" style="margin-top:8px;">本示例中外卖与导航按钮仅作演示，真实项目可接入美团 / 饿了么与地图 SDK。</p>' +
    '</div>';

  sections.forEach(function hideAll(section) {
    section.classList.remove('active');
  });
  const detailSection = document.getElementById('tab-detail');
  if (detailSection) {
    detailSection.classList.add('active');
  }

  var envGrid = container.querySelector('.detail-env-grid-clickable');
  if (envGrid) {
    envGrid.querySelectorAll('.detail-env-photo').forEach(function (el) {
      el.addEventListener('click', function () {
        var idx = parseInt(el.getAttribute('data-env-index'), 10);
        if (!isNaN(idx)) {
          openEnvGallery(envPhotos, idx);
        }
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });
  }

  var tabBar = container.querySelector('.detail-tab-bar');
  if (tabBar) {
    var tabDishes = document.getElementById('detailTabDishes');
    var tabReviews = document.getElementById('detailTabReviews');
    tabBar.querySelectorAll('.detail-tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tab = btn.getAttribute('data-detail-tab');
        tabBar.querySelectorAll('.detail-tab-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        if (tab === 'dishes') {
          if (tabDishes) {
            tabDishes.classList.add('detail-tab-panel-active');
          }
          if (tabReviews) {
            tabReviews.classList.remove('detail-tab-panel-active');
          }
        } else {
          if (tabDishes) {
            tabDishes.classList.remove('detail-tab-panel-active');
          }
          if (tabReviews) {
            tabReviews.classList.add('detail-tab-panel-active');
          }
        }
      });
    });
  }

  container
    .querySelector('[data-action="takeaway"]')
    .addEventListener('click', function onTakeaway() {
      window.alert('外卖跳转示例：此处可打开对应餐厅的外卖链接。');
    });

  container.querySelector('[data-action="navigate"]').addEventListener('click', function onNavigate() {
    window.alert('导航示例：此处可调起手机地图应用进行导航。');
  });

  container
    .querySelector('[data-action="favorite"]')
    .addEventListener('click', function onFavorite() {
      toggleFavorite(restaurant.id);
      openRestaurantDetail(restaurant.id, options || undefined);
    });
}

/**
 * @param {string} id
 * @returns {void}
 */
function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(function filter(item) {
      return item !== id;
    });
  } else {
    state.favorites.push(id);
  }
  renderFavorites();
}

/**
 * @returns {void}
 */
function renderFavorites() {
  const container = document.getElementById('favoriteList');
  if (!container) {
    return;
  }
  container.innerHTML = '';
  if (!state.favorites.length) {
    container.innerHTML = '<p class="muted">还没有收藏任何餐厅。</p>';
    updateProfileCounts();
    return;
  }

  state.favorites.forEach(function append(id) {
    const restaurant = RESTAURANTS.find(function find(r) {
      return r.id === id;
    });
    if (!restaurant) {
      return;
    }
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div class="card-title">' +
      restaurant.name +
      '</div>' +
      '<div class="card-meta">⭐ ' +
      restaurant.rating.toFixed(1) +
      '</div>' +
      '</div>' +
      '<div class="card-meta">' +
      restaurant.category +
      '</div>';
    card.addEventListener('click', function onClick() {
      openRestaurantDetail(restaurant.id, { from: 'favorite' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(restaurant, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });
    container.appendChild(card);
  });
}

/**
 * @returns {void}
 */
function renderHistory() {
  const container = document.getElementById('historyList');
  if (!container) {
    return;
  }
  container.innerHTML = '';
  if (!state.history.length) {
    container.innerHTML = '<p class="muted">还没有浏览记录。</p>';
    updateProfileCounts();
    return;
  }

  state.history.forEach(function append(id) {
    const restaurant = RESTAURANTS.find(function find(r) {
      return r.id === id;
    });
    if (!restaurant) {
      return;
    }
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-header-row">' +
      '<div class="card-title">' +
      restaurant.name +
      '</div>' +
      '<div class="card-meta">⭐ ' +
      restaurant.rating.toFixed(1) +
      '</div>' +
      '</div>' +
      '<div class="card-meta">最近浏览 · ' +
      restaurant.category +
      '</div>';
    card.addEventListener('click', function onClick() {
      openRestaurantDetail(restaurant.id, { from: 'history' });
    });
    card.addEventListener('mouseenter', function onEnter(event) {
      showAISummaryCard(restaurant, event);
    });
    card.addEventListener('mousemove', function onMove(event) {
      positionAISummaryCard(event);
    });
    card.addEventListener('mouseleave', function onLeave() {
      hideAISummaryCard();
    });
    container.appendChild(card);
  });
  updateProfileCounts();
}

/**
 * @param {string} scene
 * @returns {string}
 */
function mapSceneLabel(scene) {
  if (scene === 'solo') {
    return '一个人吃';
  }
  if (scene === 'dorm') {
    return '宿舍聚餐';
  }
  if (scene === 'date') {
    return '约会';
  }
  if (scene === 'late-night') {
    return '深夜食堂';
  }
  if (scene === 'study') {
    return '自习友好';
  }
  if (scene === 'delivery') {
    return '外卖友好';
  }
  return scene;
}

/**
 * @param {string} source
 * @returns {string}
 */
function mapSourceLabel(source) {
  if (source === 'random') {
    return '随机推荐';
  }
  if (source === 'recommend') {
    return '今日推荐';
  }
  if (source === 'map') {
    return '地图点位';
  }
  if (source === 'list') {
    return '列表';
  }
  if (source === 'community') {
    return '社区内容';
  }
  if (source === 'hometown') {
    return '家乡美味';
  }
  if (source === 'ai') {
    return 'AI 推荐';
  }
  if (source === 'favorite') {
    return '我的收藏';
  }
  if (source === 'history') {
    return '浏览记录';
  }
  return '系统推荐';
}

/**
 * @param {string} text
 * @returns {string}
 */
function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * @returns {void}
 */
/**
 * 核心筛选标签：点击选中，再次点击取消选中（恢复「美食」全部）
 */
function initCoreTags() {
  var tags = document.querySelectorAll('.core-tag');
  tags.forEach(function handleTag(tag) {
    tag.addEventListener('click', function onClick() {
      var key = tag.getAttribute('data-core-key') || 'food';
      var isCurrentlyActive = tag.classList.contains('active');
      if (isCurrentlyActive) {
        state.coreFilter = 'food';
        tags.forEach(function reset(t) {
          t.classList.remove('active');
        });
        var foodTag = document.querySelector('.core-tag[data-core-key="food"]');
        if (foodTag) foodTag.classList.add('active');
      } else {
        state.coreFilter = key;
        tags.forEach(function reset(t) {
          t.classList.remove('active');
        });
        tag.classList.add('active');
      }
      state.searchKeyword = null;
      state.sceneFilter = 'any';
      var sceneSelect = document.getElementById('sceneFilter');
      if (sceneSelect) sceneSelect.value = state.sceneFilter;
      renderRestaurantList();
    });
  });
}

/**
 * @returns {void}
 */
function initAIHelper() {
  const fab = document.getElementById('aiAssistantFab');
  const panel = document.getElementById('aiCommandPanel');
  const input = document.getElementById('aiCommandInput');
  const submit = document.getElementById('aiCommandSubmit');
  const close = document.getElementById('aiCommandClose');

  if (!fab || !panel) {
    return;
  }

  fab.addEventListener('click', function onFabClick() {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden') && input) {
      input.focus();
    }
  });

  if (close) {
    close.addEventListener('click', function onClose() {
      panel.classList.add('hidden');
    });
  }

  function handleSubmit() {
    if (!input) {
      return;
    }
    const text = input.value.trim();
    if (!text) {
      return;
    }
    const aiTab = document.querySelector('.nav-tab[data-tab="ai"]');
    if (aiTab) {
      aiTab.click();
    }
    renderAIResult();
    panel.classList.add('hidden');
  }

  if (submit) {
    submit.addEventListener('click', function onSubmit() {
      handleSubmit();
    });
  }

  if (input) {
    input.addEventListener('keydown', function onKeyDown(event) {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    });
  }
}

/**
 * 同步右上角登录/用户按钮显示状态
 */
function updateHeaderUserUI() {
  var loginBtn = document.getElementById('headerLoginBtn');
  var userBtn = document.getElementById('headerUserBtn');
  if (loginBtn && userBtn) {
    if (state.userLoggedIn) {
      loginBtn.classList.add('hidden');
      userBtn.classList.remove('hidden');
    } else {
      loginBtn.classList.remove('hidden');
      userBtn.classList.add('hidden');
    }
  }
}

/**
 * 初始化登录：右上角登录按钮、登录弹窗（手机号/微信/QQ，未注册直接登录）、登录后变头像跳转我的
 */
function initLoginUI() {
  var loginBtn = document.getElementById('headerLoginBtn');
  var userBtn = document.getElementById('headerUserBtn');
  var overlay = document.getElementById('loginOverlay');
  var closeBtn = document.getElementById('loginCloseBtn');
  var backdrop = document.getElementById('loginBackdrop');
  var loginSubmitBtn = document.getElementById('loginSubmitBtn');
  var loginPhoneInput = document.getElementById('loginPhoneInput');
  var loginOtherLink = document.getElementById('loginOtherLink');
  var loginOtherOptions = document.getElementById('loginOtherOptions');
  var loginWechatLink = document.getElementById('loginWechatLink');
  var loginQQLink = document.getElementById('loginQQLink');

  updateHeaderUserUI();

  function closeLogin() {
    if (overlay) overlay.classList.add('hidden');
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', function () {
      if (overlay) overlay.classList.remove('hidden');
      if (loginOtherOptions) loginOtherOptions.classList.add('hidden');
    });
  }

  if (userBtn) {
    userBtn.addEventListener('click', function () {
      var profileTab = document.querySelector('.nav-tab[data-tab="profile"]');
      if (profileTab) profileTab.click();
      var sections = document.querySelectorAll('.tab-content');
      var tabs = document.querySelectorAll('.nav-tab');
      sections.forEach(function (s) { s.classList.remove('active'); });
      tabs.forEach(function (t) { t.classList.remove('active'); });
      var profileSection = document.getElementById('tab-profile');
      if (profileSection) profileSection.classList.add('active');
      if (profileTab) profileTab.classList.add('active');
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLogin);
  if (backdrop) backdrop.addEventListener('click', closeLogin);

  if (loginOtherLink && loginOtherOptions) {
    loginOtherLink.addEventListener('click', function (e) {
      e.preventDefault();
      loginOtherOptions.classList.toggle('hidden');
    });
  }

  if (loginWechatLink) {
    loginWechatLink.addEventListener('click', function (e) {
      e.preventDefault();
      doLogin();
    });
  }
  if (loginQQLink) {
    loginQQLink.addEventListener('click', function (e) {
      e.preventDefault();
      doLogin();
    });
  }

  function doLogin() {
    state.userLoggedIn = true;
    state.userPhone = loginPhoneInput && loginPhoneInput.value.trim() ? loginPhoneInput.value.trim().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : '138****0000';
    closeLogin();
    updateHeaderUserUI();
    renderProfileCertStatus();
    var phoneEl = document.getElementById('profilePhone');
    if (phoneEl) phoneEl.textContent = state.userPhone;
  }

  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', function () {
      doLogin();
    });
  }
}

/**
 * 渲染「我的」页学生认证状态与认证按钮
 */
function renderProfileCertStatus() {
  var statusEl = document.getElementById('profileCertStatus');
  var certBtn = document.getElementById('profileCertBtn');
  if (!statusEl || !certBtn) return;
  if (state.userVerified) {
    statusEl.textContent = '已认证';
    statusEl.className = 'profile-cert-status certified';
    certBtn.textContent = '已认证';
    certBtn.disabled = true;
  } else {
    statusEl.textContent = '未认证（认证后可发帖、评论）';
    statusEl.className = 'profile-cert-status';
    certBtn.textContent = '去认证';
    certBtn.disabled = false;
  }
}

/**
 * 初始化学生认证弹窗与「我的」页认证入口
 */
function initCertification() {
  var certBtn = document.getElementById('profileCertBtn');
  var overlay = document.getElementById('certOverlay');
  var closeBtn = document.getElementById('certCloseBtn');
  var backdrop = document.getElementById('certBackdrop');
  var submitBtn = document.getElementById('certSubmitBtn');

  renderProfileCertStatus();

  function closeCert() {
    if (overlay) overlay.classList.add('hidden');
  }

  if (certBtn) {
    certBtn.addEventListener('click', function () {
      if (!state.userLoggedIn) {
        window.alert('请先登录');
        var lo = document.getElementById('loginOverlay');
        if (lo) lo.classList.remove('hidden');
        return;
      }
      if (state.userVerified) return;
      if (overlay) overlay.classList.remove('hidden');
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCert);
  if (backdrop) backdrop.addEventListener('click', closeCert);

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      state.userVerified = true;
      closeCert();
      renderProfileCertStatus();
    });
  }
}

/**
 * @param {Restaurant} restaurant
 * @param {MouseEvent} event
 * @returns {void}
 */
function showAISummaryCard(restaurant, event) {
  var card = document.getElementById('aiSummaryCard');
  if (!card) return;
  var summary = buildAISummaryText(restaurant);
  card.innerHTML = '<span class="ai-summary-title">小智总结</span><div class="ai-summary-body">' + escapeHTML(summary) + '</div>';
  card.classList.remove('hidden');
  positionAISummaryCard(event);
}

/**
 * 根据贴文内容生成小智总结文案（社区用）
 * @param {CommunityPost} post
 * @returns {string}
 */
function buildAIPostSummaryText(post) {
  var title = (post.title || '').trim();
  var content = (post.content || '').trim();
  var parts = [];
  if (title) {
    parts.push('标题：' + title);
  }
  if (content) {
    var excerpt = content.length > 60 ? content.slice(0, 60) + '…' : content;
    parts.push('内容摘要：' + excerpt);
  }
  if (post.likes != null) {
    parts.push('获赞 ' + post.likes + '');
  }
  if (post.restaurantId) {
    var r = RESTAURANTS.find(function (x) { return x.id === post.restaurantId; });
    if (r) parts.push('关联餐厅：' + r.name);
  }
  return parts.length ? parts.join(' · ') : '暂无内容摘要';
}

/**
 * 社区贴文悬停时展示小智总结（对贴文内容的总结）
 * @param {CommunityPost} post
 * @param {MouseEvent} event
 */
function showAIPostSummaryCard(post, event) {
  var card = document.getElementById('aiSummaryCard');
  if (!card) return;
  var summary = buildAIPostSummaryText(post);
  card.innerHTML = '<span class="ai-summary-title">小智总结</span><div class="ai-summary-body">' + escapeHTML(summary) + '</div>';
  card.classList.remove('hidden');
  positionAISummaryCard(event);
}

/**
 * @param {MouseEvent} event
 * @returns {void}
 */
function positionAISummaryCard(event) {
  const card = document.getElementById('aiSummaryCard');
  if (!card) {
    return;
  }
  const offset = 14;
  card.style.left = String(event.clientX + offset) + 'px';
  card.style.top = String(event.clientY + offset) + 'px';
}

/**
 * @returns {void}
 */
function hideAISummaryCard() {
  const card = document.getElementById('aiSummaryCard');
  if (!card) {
    return;
  }
  card.classList.add('hidden');
}

/**
 * @param {Restaurant} restaurant
 * @returns {string}
 */
function buildAISummaryText(restaurant) {
  const parts = [];
  parts.push(
    restaurant.name +
      ' · 评分 ' +
      restaurant.rating.toFixed(1) +
      ' · 人均 ¥' +
      restaurant.price.toFixed(0)
  );
  if (restaurant.distanceKm <= 0.5) {
    parts.push('离你很近，下课走几步就到。');
  } else if (restaurant.distanceKm <= 1) {
    parts.push('步行可达，适合和同学一起慢慢走过去。');
  } else {
    parts.push('距离略远，但更适合周末或小聚。');
  }
  if (restaurant.scenes.includes('solo')) {
    parts.push('适合一个人解决一餐。');
  }
  if (restaurant.scenes.includes('dorm')) {
    parts.push('很适合作为宿舍团建或小聚地点。');
  }
  if (restaurant.scenes.includes('late-night')) {
    parts.push('营业到很晚，可以当作深夜食堂。');
  }
  if (restaurant.scenes.includes('study')) {
    parts.push('环境相对安静，自习友好。');
  }
  if (restaurant.tags.includes('家乡味')) {
    parts.push('带点家乡味，适合解一解思乡。');
  }
  return '小智：' + parts.join(' ');
}

/**
 * 获取店铺环境图占位数据（美团风格「商家实景」），前 6 个用于首屏网格，全部用于悬浮画廊
 * @param {string} restaurantId
 * @returns {string[]}
 */
function getShopEnvPhotos(restaurantId) {
  var labels = [
    ['门头', '室内环境', '用餐区', '菜品实拍', '厨房/吧台', '座位区', '吧台细节', '包间一角', '户外座位'],
    ['店面', '大厅', '包间', '招牌菜', '环境一角', '外摆', '厨房明档', '卡座区', '窗边位'],
    ['门面', '室内1', '室内2', '菜品', '细节', '氛围', '灯光效果', '装饰', '餐具']
  ];
  var idx = Math.abs(restaurantId.split('').reduce(function (a, c) { return a + c.charCodeAt(0); }, 0)) % 3;
  return labels[idx];
}

/** 菜品占位图（无图时使用） */
var DISH_IMG_PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90"><rect fill="#1a1d2e" width="120" height="90"/><text x="60" y="45" fill="#8b90c0" text-anchor="middle" font-size="12">菜品</text></svg>'
);

/** 评价图片占位（无图时使用） */
var REVIEW_IMG_PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect fill="#0e1122" width="80" height="80"/><text x="40" y="42" fill="#5a5f7a" text-anchor="middle" font-size="11">晒图</text></svg>'
);

/**
 * 获取店铺更多评价列表（含评价图片）
 * @param {Restaurant} restaurant
 * @returns {{userName: string, rating: number, timeAgo: string, content: string, images?: string[]}[]}
 */
function getShopReviews(restaurant) {
  var names = ['校园吃货', '干饭人小张', '今天吃啥', '食堂在逃选手', '干饭不积极', '干饭第一名', '爱吃辣的某同学', '匿名用户', '期末复习人', '宿舍美食家'];
  var times = ['刚刚', '1 小时前', '昨天', '2 天前', '3 天前', '本周', '上周'];
  var list = [];
  restaurant.reviewSnippets.forEach(function (text, i) {
    list.push({
      userName: names[i % names.length],
      rating: restaurant.rating,
      timeAgo: times[i % times.length],
      content: text,
      images: [REVIEW_IMG_PLACEHOLDER, REVIEW_IMG_PLACEHOLDER].slice(0, (i % 2) + 1)
    });
  });
  while (list.length < 10) {
    var i = list.length;
    var numImgs = (i % 3 === 0) ? 0 : ((i % 3 === 1) ? 1 : 2);
    list.push({
      userName: names[i % names.length],
      rating: restaurant.rating - (i % 3) * 0.1,
      timeAgo: times[i % times.length],
      content: '味道不错，性价比高，会再来。环境也干净，适合学生党。',
      images: numImgs ? Array(numImgs).fill(REVIEW_IMG_PLACEHOLDER) : []
    });
  }
  return list.slice(0, 10);
}

/**
 * 获取详情页热门菜品（带图、价格），展示更多条
 * @param {string} restaurantId
 * @returns {{name: string, price: number, image: string}[]}
 */
function getDetailDishes(restaurantId) {
  var menus = {
    r1: [
      { name: '招牌川味冒菜', price: 22 },
      { name: '牛肉冒菜拼盘', price: 26 },
      { name: '双人冒菜套餐', price: 48 },
      { name: '单人素冒菜', price: 16 },
      { name: '麻辣鸭血', price: 12 },
      { name: '冰粉', price: 8 }
    ],
    r2: [
      { name: '番茄牛腩盖饭', price: 18 },
      { name: '黑椒鸡腿盖饭', price: 17 },
      { name: '卤肉双拼盖饭', price: 19 },
      { name: '鱼香肉丝盖饭', price: 18 },
      { name: '宫保鸡丁盖饭', price: 17 },
      { name: '酸辣土豆丝盖饭', price: 14 }
    ],
    r3: [
      { name: '锅包肉', price: 38 },
      { name: '地三鲜', price: 26 },
      { name: '小鸡炖蘑菇', price: 42 },
      { name: '酸菜白肉', price: 36 },
      { name: '东北大拉皮', price: 18 },
      { name: '拔丝地瓜', price: 28 }
    ],
    r4: [
      { name: '手冲美式咖啡', price: 18 },
      { name: '拿铁咖啡', price: 22 },
      { name: '学生作业套餐（饮品+小食）', price: 32 },
      { name: '芝士蛋糕', price: 28 },
      { name: '贝果套餐', price: 26 },
      { name: '冷萃咖啡', price: 24 }
    ],
    r5: [
      { name: '秘制烤鸡翅（3 串）', price: 18 },
      { name: '烤豆腐', price: 10 },
      { name: '深夜双人烧烤拼盘', price: 56 },
      { name: '烤韭菜', price: 12 },
      { name: '烤茄子', price: 14 },
      { name: '啤酒', price: 8 }
    ],
    r6: [
      { name: '招牌牛腩汤粉', price: 24 },
      { name: '猪脚汤粉', price: 22 },
      { name: '爽口云吞粉', price: 20 },
      { name: '干炒牛河', price: 26 },
      { name: '艇仔粥', price: 18 },
      { name: '油菜', price: 8 }
    ],
    r7: [
      { name: '黑椒牛排套餐', price: 68 },
      { name: '奶油培根意面', price: 46 },
      { name: '情侣双人套餐', price: 118 },
      { name: '凯撒沙拉', price: 38 },
      { name: '蘑菇汤', price: 28 },
      { name: '提拉米苏', price: 36 }
    ],
    r8: [
      { name: '招牌螺蛳粉', price: 18 },
      { name: '加料螺蛳粉（腐竹+鸭脚）', price: 24 },
      { name: '干捞螺蛳粉', price: 20 },
      { name: '酸笋', price: 4 },
      { name: '豆泡', price: 3 },
      { name: '卤蛋', price: 3 }
    ],
    r9: [
      { name: '自选两荤一素', price: 12 },
      { name: '自选三荤一素', price: 15 },
      { name: '米饭免费续', price: 0 },
      { name: '加荤菜', price: 4 },
      { name: '加素菜', price: 2 },
      { name: '例汤', price: 2 }
    ],
    r10: [
      { name: '豚骨拉面', price: 36 },
      { name: '味噌拉面', price: 32 },
      { name: '叉烧套餐', price: 42 },
      { name: '煎饺（5只）', price: 22 },
      { name: '炸鸡块', price: 28 },
      { name: '可尔必思', price: 12 }
    ],
    r11: [
      { name: '自选沙拉（大份）', price: 28 },
      { name: '鸡胸轻食套餐', price: 26 },
      { name: '牛油果能量碗', price: 32 },
      { name: '藜麦碗', price: 30 },
      { name: '鲜榨果汁', price: 18 },
      { name: '酸奶杯', price: 16 }
    ],
    r12: [
      { name: '中份大盘鸡', price: 78 },
      { name: '大份大盘鸡', price: 108 },
      { name: '皮带面（加一份）', price: 8 },
      { name: '羊肉串（5串）', price: 35 },
      { name: '手抓饭', price: 32 },
      { name: '酸奶', price: 10 }
    ],
    r13: [
      { name: '鸳鸯锅底', price: 48 },
      { name: '麻辣锅底', price: 42 },
      { name: '毛肚', price: 38 },
      { name: '鸭肠', price: 28 },
      { name: '牛肉片', price: 36 },
      { name: '蔬菜拼盘', price: 18 }
    ],
    r14: [
      { name: '招牌奶茶', price: 12 },
      { name: '珍珠奶茶', price: 14 },
      { name: '芝士奶盖', price: 18 },
      { name: '芋圆奶茶', price: 16 },
      { name: '柠檬茶', price: 10 },
      { name: '咖啡奶茶', price: 14 }
    ]
  };
  var list = menus[restaurantId] || [];
  return list.map(function (item) {
    return {
      name: item.name,
      price: item.price,
      image: DISH_IMG_PLACEHOLDER
    };
  });
}

/**
 * @param {string} restaurantId
 * @returns {string[]}
 */
function buildMenuLines(restaurantId) {
  const menus = {
    r1: [
      { name: '招牌川味冒菜', price: 22 },
      { name: '牛肉冒菜拼盘', price: 26 },
      { name: '双人冒菜套餐', price: 48 }
    ],
    r2: [
      { name: '番茄牛腩盖饭', price: 18 },
      { name: '黑椒鸡腿盖饭', price: 17 },
      { name: '卤肉双拼盖饭', price: 19 }
    ],
    r3: [
      { name: '锅包肉', price: 38 },
      { name: '地三鲜', price: 26 },
      { name: '小鸡炖蘑菇', price: 42 }
    ],
    r4: [
      { name: '手冲美式咖啡', price: 18 },
      { name: '拿铁咖啡', price: 22 },
      { name: '学生作业套餐（饮品+小食）', price: 32 }
    ],
    r5: [
      { name: '秘制烤鸡翅（3 串）', price: 18 },
      { name: '烤豆腐', price: 10 },
      { name: '深夜双人烧烤拼盘', price: 56 }
    ],
    r6: [
      { name: '招牌牛腩汤粉', price: 24 },
      { name: '猪脚汤粉', price: 22 },
      { name: '爽口云吞粉', price: 20 }
    ],
    r7: [
      { name: '黑椒牛排套餐', price: 68 },
      { name: '奶油培根意面', price: 46 },
      { name: '情侣双人套餐', price: 118 }
    ],
    r8: [
      { name: '招牌螺蛳粉', price: 18 },
      { name: '加料螺蛳粉（腐竹+鸭脚）', price: 24 },
      { name: '干捞螺蛳粉', price: 20 }
    ],
    r9: [
      { name: '自选两荤一素', price: 12 },
      { name: '自选三荤一素', price: 15 },
      { name: '米饭免费续', price: 0 }
    ],
    r10: [
      { name: '豚骨拉面', price: 36 },
      { name: '味噌拉面', price: 32 },
      { name: '叉烧套餐', price: 42 }
    ],
    r11: [
      { name: '自选沙拉（大份）', price: 28 },
      { name: '鸡胸轻食套餐', price: 26 },
      { name: '牛油果能量碗', price: 32 }
    ],
    r12: [
      { name: '中份大盘鸡', price: 78 },
      { name: '大份大盘鸡', price: 108 },
      { name: '皮带面（加一份）', price: 8 }
    ]
  };

  const list = menus[restaurantId] || [];
  if (!list.length) {
    return [];
  }
  return list.map(function mapItem(item) {
    return (
      '<li>' +
      escapeHTML(item.name) +
      ' · <span class="muted">约 ¥' +
      String(item.price) +
      '</span></li>'
    );
  });
}

document.addEventListener('DOMContentLoaded', function onReady() {
  initApp();
});

