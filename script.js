/* ══════════════════════════════════
   🔁 EDIT THIS DATA TO ADD YOUR EVENTS
   Replace formLink with your actual Google Form URLs
   ══════════════════════════════════ */
const EVENTS = [
    // --- TECHNICAL INDIVIDUAL EVENTS ---
    {
        id:1, cat:'tech', type:'individual', emoji:'<img src="images/uiux_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="UI/UX">', color:'#FF6B35', badge:'Tech',
        title:'UI/UX Designing', desc:'User Interface Design and User Experience Design focus on creating visually appealing and user-friendly digital products. It involves designing layouts, buttons, colors, and navigation for websites or applications. The goal is to make the product easy to use and visually attractive.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/iKJxSLYRzxzoVgey9'
    },
    {
        id:2, cat:'tech', type:'individual', emoji:'<img src="images/revcod_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Reverse Coding">', color:'#FF6B35', badge:'Tech',
        title:'Reverse Coding', desc:'Reverse Coding is a programming challenge where participants analyze given output or logic. Players must write the correct code that produces the given result. It tests logical thinking, problem-solving, and coding skills.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/QngGbQxWyRfJTjz2A'
    },
    {
        id:3, cat:'tech', type:'individual', emoji:'<img src="images/vibecod_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Vibe Coding">', color:'#FF6B35', badge:'Tech',
        title:'Vibe Coding', desc:'Vibe Coding is a fun coding activity focused on creativity and quick problem solving. Participants write code to create simple programs, effects, or small features. The challenge encourages innovation and coding skills.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/Hvpfg5PyBMA3ddB99'
    },
    {
        id:5, cat:'tech', type:'individual', emoji:'<img src="images/circuit_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Circuit Design">', color:'#FF6B35', badge:'Tech',
        title:'Circuit Design', desc:'Circuit Design is a technical activity where participants create electronic circuits. Players design circuits using different electronic components. The activity tests technical knowledge and problem-solving skills.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/74FxLcuiGLzyufCN7'
    },
    {
        id:6, cat:'tech', type:'individual', emoji:'<img src="images/draft_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Draft Master">', color:'#FF6B35', badge:'Tech',
        title:'Draft Master', desc:'Display your AutoCAD/SolidWorks mastery. Participants will recreate complex 2D/3D mechanical drawings from physical models or rough sketches under a strict time limit.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/AJ5hHXpKVLJ3NTnF6'
    },

    // --- TECHNICAL GROUP EVENTS ---
    {
        id:7, cat:'tech', type:'group', emoji:'<img src="images/hack_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Electric Hackathon">', color:'#00BCD4', badge:'Tech',
        title:'Electric Hackathon', desc:'Electric Hackathon is a technical event where participants create innovative electrical or electronic solutions. Teams design and build electrical circuits or devices to solve a given problem. The event promotes creativity, technical skills, and teamwork.',
        date:'', fee:'₹120', team:'4 Members', formLink:'#'
    },
    {
        id:8, cat:'tech', type:'group', emoji:'<img src="images/b&b_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Build & Break">', color:'#00BCD4', badge:'Tech',
        title:'Build & Break', desc:'Build & Break is a fun challenge where participants first build a structure or model using given materials. After building, teams must test or break the structure within certain rules. The activity checks creativity, strength of design, and problem-solving skills.',
        date:'', fee:'₹120', team:'4 Members', formLink:'#'
    },
    {
        id:4, cat:'tech', type:'group', emoji:'<img src="images/hack_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Arduino Hackathon">', color:'#00BCD4', badge:'Tech',
        title:'Arduino Hackathon', desc:'Arduino Hackathon is a technical event where participants build innovative hardware projects. Teams use Arduino boards and electronic components to create working prototypes. The event encourages creativity, problem-solving, and teamwork.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://docs.google.com/forms/d/e/1FAIpQLSfeRedmovjAfra8WwdLG4o6fgYo9DpB7TBsfsZbiD0D9HoedQ/viewform?usp=header'
    },
    {
        id:90, cat:'tech', type:'group', emoji:'<img src="images/circuit_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Circuit Design">', color:'#00BCD4', badge:'Tech',
        title:'Circuit Design (Group)', desc:'Circuit Design is a technical activity where participants create electronic circuits. Players design circuits using different electronic components. The activity tests technical knowledge and problem-solving skills.',
        date:'', fee:'₹60', team:'2 Members', formLink:'https://docs.google.com/forms/d/e/1FAIpQLSd8ztg1N4iJSMY3jO7tDlf8KWuJXwrTmbVAq_6k-OZp403krQ/viewform?usp=publish-editor'
    },
    {
        id:91, cat:'tech', type:'group', emoji:'<img src="images/word_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Word Puzzle">', color:'#00BCD4', badge:'Tech',
        title:'Word Puzzle', desc:'Word Puzzle Round tests technical knowledge using puzzles like scrambled words and clues. Participants solve within a fixed time. Focuses on logical thinking and problem-solving. Winners based on accuracy and time.',
        date:'', fee:'₹50', team:'2 Members', formLink:'https://docs.google.com/forms/d/e/1FAIpQLSe4mzZCNp_WwgSZcgYWnLuofAejZvMwU7vsZK0Lo5uJc8QVag/viewform?usp=publish-editor'
    },
    {
        id:92, cat:'tech', type:'group', emoji:'<img src="images/hack_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="5hr Hackathon">', color:'#00BCD4', badge:'Tech',
        title:'5hr Hackathon', desc:'A 5-Hour Hackathon is a fast-paced coding event where participants build a project within five hours. Teams work on innovative ideas, software, or technical solutions. The event encourages creativity, teamwork, and problem-solving skills.',
        date:'', fee:'₹160', team:'4 Members', formLink:'#'
    },

    // --- NON-TECHNICAL INDIVIDUAL EVENTS ---
    {
        id:11, cat:'nontech', type:'individual', emoji:'<img src="images/thunder_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Thunder Shock">', color:'#7B2FBE', badge:'Fun',
        title:'Thunder Shock', desc:'A precision-based challenge where participants guide a ring along a wire without touching it. Any contact triggers an alarm and leads to elimination. It tests steady hands, focus, and control.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/vFnZ7RX2r57vB8fB9'
    },
    {
        id:12, cat:'nontech', type:'individual', emoji:'<img src="images/ping_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Ping Pong Toss">', color:'#7B2FBE', badge:'Fun',
        title:'Ping Pong Toss', desc:'A carnival-style aim game! Throw ping pong balls to land them inside high-value glass targets across the table to accumulate the highest score.',
        date:'', fee:'₹30', team:'Solo', formLink:'https://forms.gle/sKTKNMtXqFqMiz7m7'
    },
    

    // --- NON-TECHNICAL GROUP EVENTS ---
   {
        id:13, cat:'nontech', type:'group', emoji:'<img src="images/escape_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Escape the Darkness">', color:'#E91E8C', badge:'Fun',
        title:'Escape the Darkness', desc:'Escape the Darkness is a thrilling game designed with a scary and mysterious environment. Participants enter the den and face surprising horror elements and challenges. Players must stay calm and complete the task inside the den.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://forms.gle/orQ3xxCWNPiVrNVT6'
    },
    {
        id:10, cat:'nontech', type:'group', emoji:'<img src="images/tri_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Triathlon">', color:'#E91E8C', badge:'Fun',
        title:'Triathlon', desc:'Triathlon is a dynamic team event combining three fun challenges—Lemon and Spoon, Balloon Blast, and Cup Pyramid. Teams of two must race, coordinate, and build under pressure across each stage. It tests balance, teamwork, and speed. The fastest and most efficient team wins.',
        date:'', fee:'₹60', team:'2 Members', formLink:'https://forms.gle/Yvodmw2wMEB6JhUG8'
    },
    {
        id:14, cat:'nontech', type:'group', emoji:'<img src="images/ludo_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Live Ludo">', color:'#E91E8C', badge:'Fun',
        title:'Live Ludo', desc:'LIVE LUDO is a real-life version of the traditional Ludo board game. In this game, participants act as the tokens and move on a large Ludo board made on the ground. Players roll a dice and move according to the number shown on the dice.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://forms.gle/kUpvX6XFx4txH9Cu9'
    },
    {
        id:15, cat:'nontech', type:'group', emoji:'<img src="images/hunt_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Treasure Hunt">', color:'#E91E8C', badge:'Fun',
        title:'Treasure Hunt', desc:'Treasure Hunt is a fun game where participants search for hidden clues. Each clue leads to the next location. Players must solve puzzles to reach the final treasure. The team that finds the treasure first wins.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://forms.gle/vSQfaJryz5T1VbAx5'
    },
    {
        id:16, cat:'nontech', type:'group', emoji:'<img src="images/satoliya_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Satoliya">', color:'#E91E8C', badge:'Fun',
        title:'Satoliya', desc:'Satoliya is a traditional outdoor game played with *seven stacked stones and a ball*. One team throws the ball to break the stack of stones. The same team must rebuild the stack while the other team tries to hit them with the ball. The team that successfully rebuilds the stones wins the round.',
        date:'', fee:'₹200', team:'5 Members', formLink:'https://forms.gle/ZAmLDHRdPz9eG6U68'
    },
    {
        id:17, cat:'nontech', type:'group', emoji:'<img src="images/tic_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Tic Tac Toe">', color:'#E91E8C', badge:'Fun',
        title:'Tic Tac Toe', desc:'Tic Tac Toe is a simple strategy game played between two players. Players take turns marking *X* or *O* on a grid. The goal is to make a straight line of three marks horizontally, vertically, or diagonally. The player who forms the line first wins the game.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://forms.gle/fGeshCAbaSdmYMbM9'
    },
    {
        id:18, cat:'nontech', type:'group', emoji:'<img src="images/dhamseras_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Musical Dumb Charades">', color:'#E91E8C', badge:'Fun',
        title:'Musical Dumb Charades', desc:'Musical Dhamseras is a fun team game of music and quick thinking. One player listens to a song, identifies its movie, and then explains the movie to their team without naming it. The team must guess the correct movie title based on the clues. It tests memory, communication, and teamwork.',
        date:'', fee:'₹160', team:'4 Members', formLink:'https://forms.gle/aByxRhbf6GrmDkey6'
    },
    {
        id:20, cat:'nontech', type:'group', emoji:'<img src="images/blind_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Blind Direction">', color:'#E91E8C', badge:'Fun',
        title:'Blind Direction', desc:'Blind Direction is a fun teamwork game where one player is blindfolded. Other teammates give directions to guide the player toward the goal. The blindfolded player must follow the instructions carefully.',
        date:'', fee:'₹60', team:'2 Members', formLink:'https://forms.gle/7wcX9577hpUCTe9KA'
    },
    {
        id:21, cat:'nontech', type:'group', emoji:'<img src="images/dodge_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Dodge Ball">', color:'#E91E8C', badge:'Fun',
        title:'Dodge Ball', desc:'Dodge Ball is an exciting team game played with a ball. Players try to hit opponents with the ball while avoiding getting hit themselves. If a player is hit by the ball, they are out of the round.',
        date:'', fee:'₹200', team:'5 Members', formLink:'https://forms.gle/yUtMsdJuVxVs9Pjw8'
    },
    {
        id:22, cat:'nontech', type:'group', emoji:'<img src="images/bone_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Dog & Bone">', color:'#E91E8C', badge:'Fun',
        title:'Dog & Bone', desc:'Dog & Bone is a fun team game played between two groups. A "bone" (object) is placed in the center between the teams. When a number is called, players with that number from each team run to grab the bone.',
        date:'', fee:'₹200', team:'10 Members', formLink:'https://forms.gle/fusKLmfC5zz91tvm8'
    },
    
   
];

const GAMES = [
    {
        id:30, cat:'game', type:'group', emoji:'<img src="images/bgmi_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="BGMI">', color:'#6C3483', badge:'Gaming',
        title:'BGMI Tournament',
        desc:'Battlegrounds Mobile India (BGMI) is a popular multiplayer battle royale mobile game. Players land on an island, collect weapons, and fight against other players. The safe zone gradually shrinks, making the game more intense.',
        date:'', fee:'₹160', team:'4 Members',
        formLink:'https://forms.gle/2WVCxJ1HZrMnxN1s6'
    },
    {
        id:31, cat:'game', type:'group', emoji:'<img src="images/ff_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Free Fire">', color:'#27AE60', badge:'Gaming',
        title:'Free Fire',
        desc:'Garena Free Fire is a popular multiplayer battle royale mobile game. Players land on an island and *collect weapons, equipment, and resources* to survive. The safe zone keeps shrinking, forcing players to *fight and stay inside the zone*.',
        date:'', fee:'₹160', team:'4 Members',
        formLink:'https://forms.gle/xyuDkpohmyRsj3Zo9'
    },
    {
        id:32, cat:'game', type:'group', emoji:'<img src="images/cod_logo.png" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Call of Duty">', color:'#E74C3C', badge:'Gaming',
        title:'Call of Duty',
        desc:'Call of Duty: Mobile is a popular multiplayer shooting game played on mobile devices. Players compete in different modes like team battles and survival matches. The game includes various weapons, maps, and strategies.',
        date:'Mar 25', fee:'₹160', team:'4 Members',
        formLink:'https://forms.gle/UTo3Hk9XVxKpbK9C7'
    },
];

const ALL = [...EVENTS, ...GAMES];

/* ── Hero Mouse Tracking ── */
const hero = document.getElementById('home');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
}

/* ── Card Mouse Tracking ── */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

/* ── Floating Particles ── */
(function spawnParticles() {
    const c = document.getElementById('particles');
    const cols = ['#7B2FBE','#FF6B35','#FFD700','#E91E8C','#00BCD4'];
    for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const s = Math.random() * 8 + 4;
        Object.assign(p.style, {
            width: s+'px', height: s+'px',
            left: Math.random()*100+'%',
            background: cols[Math.floor(Math.random()*cols.length)],
            animationDuration: (Math.random()*15+10)+'s',
            animationDelay: (Math.random()*10)+'s'
        });
        c.appendChild(p);
    }
})();

/* ── Countdown ── */
function tick() {
    const target = new Date('2026-03-23T10:00:00');
    const now    = new Date();
    const diff   = target - now;
    const pad    = n => String(Math.max(0, Math.floor(n))).padStart(2,'0');
    if (diff <= 0) {
        ['d','h','m','s'].forEach(k => document.getElementById('cd-'+k).textContent = '00');
        return;
    }

    const updates = [
        { id: 'cd-d', val: pad(diff / 86400000) },
        { id: 'cd-h', val: pad((diff % 86400000) / 3600000) },
        { id: 'cd-m', val: pad((diff % 3600000)  / 60000) },
        { id: 'cd-s', val: pad((diff % 60000)    / 1000) }
    ];

    updates.forEach(({ id, val }) => {
        const el = document.getElementById(id);
        if (el.textContent !== val) {
            el.textContent = val;
            el.classList.remove('tick-vert');
            void el.offsetWidth; // trigger reflow
            el.classList.add('tick-vert');
        }
    });
}
tick(); setInterval(tick, 1000);

/* ── Skeleton ── */
function showSkeletons(n) {
    const g = document.getElementById('skelGrid');
    g.innerHTML = Array(n).fill(`
        <div class="sk-card">
            <div class="skeleton sk-img"></div>
            <div class="sk-body">
                <div class="skeleton sk-title"></div>
                <div class="skeleton sk-line"></div>
                <div class="skeleton sk-line"></div>
                <div class="skeleton sk-line-s"></div>
                <div class="skeleton sk-btn"></div>
            </div>
        </div>`).join('');
}

/* ── Render Cards ── */
function renderCards(data, gridId) {
    const g = document.getElementById(gridId);
    g.innerHTML = data.map((ev, i) => `
        <div class="event-card" data-aos="zoom-in" data-aos-delay="${Math.min(i*50, 400)}" data-cat="${ev.cat}" data-type="${ev.type || ''}" onclick="openModal(${ev.id})">
            <div class="card-img">
                <span style="position:relative;z-index:1;display:flex;justify-content:center;align-items:center;width:100%;height:100%;">${ev.emoji}</span>
                <span class="card-badge" style="color:${ev.color};border-color:${ev.color}50;">${ev.badge}</span>
            </div>
            <div class="card-body">
                <div class="card-title">${ev.title}</div>
                <div class="card-meta">
                    <span><i class="fas fa-users"></i>${ev.team}</span>
                    <span style="display:${ev.fee ? 'flex' : 'none'}"><i class="fas fa-ticket-alt"></i>Fee: ${ev.fee}</span>
                </div>
                <div class="card-btn" onclick="openModal(${ev.id}); event.stopPropagation()">
                    <i class="fas fa-info-circle"></i> Click here to know more
                </div>
            </div>
        </div>`).join('');
    
    // Initialize Vanilla Tilt on the newly rendered cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(g.querySelectorAll(".event-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
    
    observe();
    
    // Refresh AOS to detect new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/* ── Load with skeleton delay ── */
showSkeletons(6);
setTimeout(() => {
    document.getElementById('skelGrid').style.display = 'none';
    document.getElementById('evGrid').style.display   = 'grid';
    renderCards(EVENTS, 'evGrid');
    renderCards(GAMES,  'gmGrid');
}, 1000);

/* ── Filter ── */
let currentCat = 'all';
let currentSubType = 'all';

function filterEvent(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = cat;
    currentSubType = 'all'; // reset sub-filter

    const subFilters = document.getElementById('subFilters');
    subFilters.classList.add('show');
    // reset sub-filter buttons
    document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.sub-filter-btn').classList.add('active');

    applyFilters();
}

function filterSubType(type, btn) {
    document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSubType = type;
    applyFilters();
}

function applyFilters() {
    document.querySelectorAll('#evGrid .event-card').forEach(c => {
        const catMatch = (currentCat === 'all' || c.dataset.cat === currentCat);
        const typeMatch = (currentSubType === 'all' || c.dataset.type === currentSubType);
        c.style.display = (catMatch && typeMatch) ? '' : 'none';
    });

    // Refresh AOS to detect newly visible elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/* ── Modal ── */
function openModal(id) {
    const ev = ALL.find(e => e.id === id);
    if (!ev) return;
    document.getElementById('mEmoji').innerHTML  = ev.emoji;
    document.getElementById('mTitle').textContent  = ev.title;
    document.getElementById('mDesc').textContent   = ev.desc;
    document.getElementById('mFee').textContent    = ev.fee || 'Free';
    document.getElementById('mTeam').textContent   = ev.team;
    document.getElementById('mLink').href          = ev.formLink;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeOnBg(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

/* ── Hamburger ── */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'))
);

/* ── Scroll Reveal ── */
function observe() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}
observe();

/* ── Navbar shrink on scroll ── */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.padding = window.scrollY > 50 ? '0.6rem 2rem' : '1rem 2rem';
});

/* ── Loader ── */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loaderH2 = loader.querySelector('h2');
        const navLogo = document.querySelector('.logo');
        const loaderText = loader.querySelector('.loader-text');
        const progContainer = loader.querySelector('.progress-container');
        
        // Fade out background and surrounding text
        loader.style.background = 'transparent';
        if (loaderText) {
            loaderText.style.transition = 'opacity 0.4s';
            loaderText.style.opacity = '0';
        }
        if (progContainer) {
            progContainer.style.transition = 'opacity 0.4s';
            progContainer.style.opacity = '0';
        }
        
        // Calculate transform
        const rectHero = loaderH2.getBoundingClientRect();
        const rectTarget = navLogo.getBoundingClientRect();
        
        const scale = rectTarget.height / rectHero.height;
        const translateX = rectTarget.left - rectHero.left;
        const translateY = rectTarget.top - rectHero.top;
        
        // Animate H2
        loaderH2.style.transformOrigin = 'top left';
        loaderH2.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s 0.8s';
        loaderH2.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        
        setTimeout(() => {
            loaderH2.style.opacity = '0'; // Hide the animated text instantly
            navLogo.classList.add('pop'); // Pop the real logo
            loader.classList.add('hidden');
        }, 800);
        
    }, 1500); // Minimum 1.5s display for effect
});

/* ── Active Link Highlight ── */
const sections = document.querySelectorAll('section, footer');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
});

AOS.init({ duration: 800, once: true });
