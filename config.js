export const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
    defaultSearchTemplate: 'https://google.com/search?q={}',
    openLinksInNewTab: true,
    suggestionLimit: 4,
  };

  // prettier-ignore
export const COMMANDS = new Map([
    ['jam', { name: 'Music', url: 'https://www.youtube.com/watch?v=yunQmahLKEo&list=PLFNs1lnnodNIvsBzKLoSMoLc_PpJAkcrk&pp=iAQB' }],
    ['c', { name: 'ChatGPT', searchTemplate: '?q={}', url: 'https://chatgpt.com' }],
    ['d', { name: 'Drive', url: 'https://drive.google.com/drive/u/0/my-drive' }],
    ['t', { name: 'Twitch', searchTemplate: 'search?term={}', url: 'https://www.twitch.tv/' }],
    ['g', { name: 'GitHub', searchTemplate: '/search?q={}', url: 'https://github.com/m3huul?tab=repositories' }],
    ['gm', { name: 'Gmail', url: 'https://mail.google.com' }],
    ['m', { name: 'Manga', searchTemplate: '/search?keyword={}', url: 'https://mangareader.to/' }],
    ['a', { name: 'Anime', searchTemplate: '/search?keyword={}', url: 'https://hianime.to/' }],
    ['r', { name: 'Reddit', searchTemplate: '/search/?q={}', url: 'https://www.reddit.com' }],
    ['i', { name: 'iCloud', url: 'https://www.icloud.com/' }],
    ['y', { name: 'YouTube', searchTemplate: '/results?search_query={}', url: 'https://www.youtube.com/feed/subscriptions' }],
    ['z', { name: 'Amazon', searchTemplate: '/s?k={}', url: 'https://www.amazon.in' }],
    ['l', { name: 'Linkedin', searchTemplate: '/search/results/all/?keywords={}', url: 'https://www.linkedin.com/in/mehul-parakh-940b9b162/' }],
    // ['f', { name: 'Figma', url: 'https://www.figma.com' }],
    // ['k', { name: 'Keep', url: 'https://keep.google.com' }],
    // ['i', { name: 'Intuit', url: 'https://selfemployed.intuit.com/home' }],
    // ['n', { name: 'Notion', url: 'https://www.notion.so' }],
    // ['o', { name: 'Droplet', url: 'https://cloud.digitalocean.com/projects/50ffcff7-ad65-40e3-af88-3cbc5a38cf99/resources' }],
    // ['p', { name: 'Proton', suggestions: ['p/pass', 'p/drive'], url: 'https://mail.proton.me/u/0/inbox' }],
    // ['pd', { name: 'Proton Drive', url: 'https://drive.proton.me/u/0' }],
    // ['pp', { name : 'Proton Pass', url: 'https://pass.proton.me/u/0' }],
    // ['s', { name: 'Supabase', url: 'https://supabase.com/dashboard/projects' }],
    // ['t', { name: 'TickTick', url: 'https://ticktick.com/webapp/#q/today/tasks' }],
    // ['v', { name: 'Vercel', suggestions: ['v0.dev'], url: 'https://vercel.com/dashboard' }],
    // ['ac', { name: 'Claude', url: 'https://claude.ai/new' }],
    // ['ag', { name: 'Gemini', url: 'https://gemini.google.com/app' }],
    // ['b', { name: 'perp', searchTemplate: '/search/new?q={}', url: 'https://perplexity.ai' }],
    // ['c', { name: 'Cloudflare', url: 'https://dash.cloudflare.com' }],
    // ['0', { name: 'localhost', suggestions: ['0:5173', '0:8080'], url: 'http://localhost:3000' }],
    // ['0:5173', { url: 'http://localhost:5173' }],
    // ['0:8080', { url: 'http://localhost:8080' }],
]);

console.log("Page Loaded.");