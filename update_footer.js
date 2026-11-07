const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace navigation block
const oldNavBlockRegex = /<div class="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-slate-400">[\s\S]*?<\/div>/;

const newNavBlock = `<div class="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-mono text-slate-400">
            <a href="#about" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>About Me</span>
            </a>
            <a href="#skills" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Skill Set</span>
            </a>
            <a href="#projects" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Projects</span>
            </a>
            <a href="#education" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Education</span>
            </a>
            <a href="#experience" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Experience</span>
            </a>
            <a href="#achievements" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Awards</span>
            </a>
            <a href="#contact" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-angle-right text-[10px] text-[#FFCA06]/70"></i><span>Get in Touch</span>
            </a>
            <a href="/cv" target="_blank" class="hover:text-[#FFCA06] transition-colors flex items-center gap-1.5 text-[#FFCA06] font-semibold">
              <i class="fa-solid fa-file-pdf text-[10px] text-[#FFCA06]"></i><span>Resume (CV)</span>
            </a>
          </div>`;

if (oldNavBlockRegex.test(content)) {
  content = content.replace(oldNavBlockRegex, newNavBlock);
  console.log('Nav block updated successfully.');
} else {
  console.log('Nav block regex did not match.');
}

// Replace socials block to include Instagram
const oldConnectRegex = /<!-- Col 3: Direct Connect & Socials \(3 cols\) -->[\s\S]*?<\/div>\s*<\/div>/;

const newConnectBlock = `<!-- Col 3: Direct Connect & Socials (3 cols) -->
        <div class="md:col-span-3 space-y-3 text-left">
          <p class="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFCA06]">Connect</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
            <a href="https://linkedin.com/in/nety-sulistyorini" target="_blank" rel="noopener noreferrer"
               class="px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#FFCA06]/50 hover:bg-[#FFCA06]/10 text-xs font-mono text-slate-300 hover:text-[#FFCA06] transition-all flex items-center gap-2.5 group">
              <i class="fa-brands fa-linkedin text-sm text-[#FFCA06]"></i>
              <span class="truncate">LinkedIn</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-auto text-slate-500 group-hover:text-white transition-colors"></i>
            </a>
            <a href="https://github.com/zeyriellz" target="_blank" rel="noopener noreferrer"
               class="px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#C91C7A]/50 hover:bg-[#C91C7A]/10 text-xs font-mono text-slate-300 hover:text-[#C91C7A] transition-all flex items-center gap-2.5 group">
              <i class="fa-brands fa-github text-sm text-[#C91C7A]"></i>
              <span class="truncate">GitHub</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-auto text-slate-500 group-hover:text-white transition-colors"></i>
            </a>
            <a href="https://www.instagram.com/zeyriellz?cplk=MWdveHo4ZGVxdzdpNw==" target="_blank" rel="noopener noreferrer"
               class="px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 text-xs font-mono text-slate-300 hover:text-[#E1306C] transition-all flex items-center gap-2.5 group">
              <i class="fa-brands fa-instagram text-sm text-[#E1306C]"></i>
              <span class="truncate">Instagram</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-auto text-slate-500 group-hover:text-white transition-colors"></i>
            </a>
            <a href="mailto:netysulistyorini.edu@gmail.com"
               class="px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#FFA726]/50 hover:bg-[#FFA726]/10 text-xs font-mono text-slate-300 hover:text-[#FFA726] transition-all flex items-center gap-2.5 group">
              <i class="fa-regular fa-envelope text-sm text-[#FFA726]"></i>
              <span class="truncate">Email</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-auto text-slate-500 group-hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>`;

if (oldConnectRegex.test(content)) {
  content = content.replace(oldConnectRegex, newConnectBlock);
  console.log('Connect block updated successfully.');
} else {
  console.log('Connect block regex did not match.');
}

fs.writeFileSync('index.html', content, 'utf8');
