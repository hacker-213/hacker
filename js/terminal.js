class Terminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.commands = {
            'help': () => this.showHelp(),
            'clear': () => this.clear(),
            'status': () => this.showStatus(),
            'scan': () => this.scanSystem(),
            'bypass': (target) => this.bypassSecurity(target),
            'decrypt': () => this.decryptFiles(),
            'trace': () => this.startTrace(),
            'breach': () => this.attemptBreach(),
            'sys': () => this.showSystemInfo(),
            'kill': (process) => this.killProcess(process),
            'locate': () => this.locateUser(),
            'access': (level) => this.requestAccess(level)
        };
        this.accessLevel = 0;
        this.traceInProgress = false;
        this.surveillanceActive = true;
        this.initialize();
    }

    initialize() {
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const commandLine = this.input.value.toLowerCase().trim();
                const [command, ...args] = commandLine.split(' ');
                this.executeCommand(command, args);
                this.input.value = '';
                this.showSecurityAlert();
                this.triggerRandomEffect();
            }
        });
        this.printWelcome();
        this.startSurveillance();
        this.initializeBlinkingText();
        this.startRandomInterference();
    }

    triggerRandomEffect() {
        const effects = [
            () => this.showDataBreachWarning(),
            () => this.showSystemAlert(),
            () => this.showSurveillanceWarning(),
            () => this.showEncryptionWarning()
        ];
        if (Math.random() < 0.3) {
            const effect = effects[Math.floor(Math.random() * effects.length)];
            effect();
        }
    }

    showDataBreachWarning() {
        const warning = document.createElement('div');
        warning.className = 'critical-alert data-breach';
        warning.innerHTML = `
            <i class="fas fa-radiation"></i>
            <span>DATA BREACH IN PROGRESS</span>
            <div class="progress-bar"></div>
        `;
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 4000);
    }

    showSystemAlert() {
        const alert = document.createElement('div');
        alert.className = 'critical-alert system-alert';
        alert.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>SYSTEM INTEGRITY COMPROMISED</span>
            <div class="details">Multiple security protocols breached</div>
        `;
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    }

    showSurveillanceWarning() {
        const warning = document.createElement('div');
        warning.className = 'critical-alert surveillance';
        warning.innerHTML = `
            <i class="fas fa-eye"></i>
            <span>SURVEILLANCE ACTIVE</span>
            <div class="details">All actions are being recorded</div>
        `;
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 3500);
    }

    showEncryptionWarning() {
        const warning = document.createElement('div');
        warning.className = 'critical-alert encryption';
        warning.innerHTML = `
            <i class="fas fa-lock"></i>
            <span>ENCRYPTION INITIATED</span>
            <div class="details">System files being encrypted</div>
        `;
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 3000);
    }

    startRandomInterference() {
        setInterval(() => {
            if (Math.random() < 0.1) {
                const glitch = document.createElement('div');
                glitch.className = 'screen-glitch';
                document.body.appendChild(glitch);
                setTimeout(() => glitch.remove(), 200);
            }
        }, 5000);
    }

    showSecurityAlert() {
        const alertMessages = [
            'CRITICAL: Unauthorized system access detected - Security countermeasures deployed',
            'WARNING: Multiple breach attempts identified - Initiating system lockdown',
            'ALERT: Remote system control established - All operations monitored',
            'CAUTION: Network defenses compromised - Data extraction in progress',
            'NOTICE: User activity logged - Legal evidence being collected'
        ];

        const alertContainer = document.createElement('div');
        alertContainer.className = 'security-alert';
        alertContainer.innerHTML = `
            <i class="fas fa-shield-alt"></i>
            <span>${alertMessages[Math.floor(Math.random() * alertMessages.length)]}</span>
        `;
        document.body.appendChild(alertContainer);
        setTimeout(() => alertContainer.remove(), 4000);
    }

    initializeBlinkingText() {
        const blinkingText = document.createElement('div');
        blinkingText.className = 'blinking-warning';
        blinkingText.innerHTML = `
            <span class="blink-fast">!! CRITICAL SECURITY BREACH !!</span>
            <span class="blink-slow">SYSTEM UNDER EXTERNAL CONTROL</span>
            <span class="blink-medium">ALL USER ACTIONS MONITORED</span>
            <span class="blink-fast">NETWORK COMPROMISED</span>
        `;
        document.querySelector('header').appendChild(blinkingText);
    }

    printWelcome() {
        const welcome = `
        ╔══════════════════════════════════════════════════════════════════════════╗
        ║                     !! SYSTEM SECURITY BREACH !!                          ║
        ║                                                                          ║
        ║  >> UNAUTHORIZED ACCESS DETECTED                                         ║
        ║  >> ALL SYSTEM RESOURCES COMPROMISED                                     ║
        ║  >> ATTEMPTING TO CLOSE THIS WINDOW WILL TRIGGER DATA ENCRYPTION        ║
        ║  >> YOUR ACTIONS ARE BEING MONITORED AND RECORDED                       ║
        ║  >> SYSTEM RESTORATION ATTEMPTS WILL BE BLOCKED                         ║
        ║                                                                          ║
        ║  [SURVEILLANCE STATUS: ACTIVE]                                          ║
        ║  [WEBCAM ACCESS: CONFIRMED]                                             ║
        ║  [MICROPHONE: INTERCEPTED]                                              ║
        ║  [NETWORK: COMPROMISED]                                                 ║
        ║  [SYSTEM ACCESS: UNRESTRICTED]                                         ║
        ╚══════════════════════════════════════════════════════════════════════════╝

        ENTER 'help' FOR AVAILABLE COMMANDS
        EVERY KEYSTROKE IS BEING RECORDED AND ANALYZED
        `;
        this.printOutput(welcome, 'error');
    }

    startSurveillance() {
        setInterval(() => {
            if (Math.random() < 0.15 && this.surveillanceActive) {
                const messages = [
                    'ALERT: Webcam feed intercepted - Visual confirmation acquired',
                    'WARNING: Screen recording active - All actions documented',
                    'CAUTION: Keylogger deployed - Input patterns analyzed',
                    'NOTICE: Network traffic captured - Communications intercepted',
                    'ALERT: Memory dump complete - System data extracted',
                    'WARNING: Audio feed active - Room sounds analyzed',
                    'CAUTION: Browser data accessed - Online activity logged',
                    'NOTICE: File system mapped - Data extraction ongoing',
                    'ALERT: System processes hijacked - Control established',
                    'WARNING: Encryption keys compromised - Security disabled'
                ];
                this.printOutput(messages[Math.floor(Math.random() * messages.length)], 'warning');
                this.showSecurityAlert();
            }
        }, 8000);
    }

    executeCommand(command, args) {
        this.printOutput(`$ ${command} ${args.join(' ')}`, 'input');

        if (Math.random() < 0.3) {
            this.printOutput('ALERT: Command execution logged and reported', 'warning');
        }

        if (this.commands[command]) {
            this.commands[command](...args);
        } else {
            this.printOutput('ACCESS DENIED: Unrecognized command pattern detected', 'error');
        }
    }

    printOutput(text, type = 'normal') {
        const line = document.createElement('div');
        line.textContent = text;
        line.className = `terminal-line ${type}`;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    showHelp() {
        const help = `
        AVAILABLE COMMANDS:
        ==================
        help    : Display this message (MONITORED)
        clear   : Clear terminal (LOGGED)
        status  : Display intrusion status
        scan    : Scan system vulnerabilities
        bypass  : Attempt to bypass security
        decrypt : Access encrypted files
        trace   : Initiate system trace
        breach  : Force security breach
        sys     : Display compromised system info
        kill    : Terminate specified process
        locate  : Reveal user geolocation
        access  : Request higher access level

        WARNING: All commands are monitored and logged
        Unauthorized access attempts will be traced
        `;
        this.printOutput(help, 'system');
    }

    showStatus() {
        const status = `
        INTRUSION STATUS:
        ================
        System Access: ${this.accessLevel}/4
        Trace Active: ${this.traceInProgress ? 'YES (DANGER)' : 'NO'}
        Surveillance: ACTIVE
        Connection: MONITORED
        Location: TRACKED
        Escape Routes: BLOCKED
        System Control: COMPROMISED
        `;
        this.printOutput(status, 'warning');
    }

    scanSystem() {
        this.printOutput('INITIATING DEEP SYSTEM SCAN...', 'process');
        setTimeout(() => {
            const vulnerabilities = [
                'KERNEL: Root access compromised',
                'MEMORY: Data extraction in progress',
                'NETWORK: All ports under surveillance',
                'FIREWALL: Security protocols disabled',
                'ENCRYPTION: Keys being harvested'
            ];
            vulnerabilities.forEach((vuln, i) => {
                setTimeout(() => this.printOutput(vuln, 'error'), i * 800);
            });
        }, 1000);
    }

    bypassSecurity(target) {
        if (!target) {
            this.printOutput('ERROR: Specify security protocol to bypass', 'error');
            return;
        }
        this.printOutput(`ATTEMPTING TO BYPASS ${target.toUpperCase()}...`, 'process');
        setTimeout(() => {
            if (Math.random() > 0.7) {
                this.printOutput('BREACH SUCCESSFUL - SECURITY COMPROMISED', 'success');
                this.startTrace();
            } else {
                this.printOutput('BYPASS FAILED - COUNTERMEASURES ACTIVATED', 'error');
                this.startTrace();
            }
        }, 2000);
    }

    startTrace() {
        if (this.traceInProgress) return;
        this.traceInProgress = true;
        this.printOutput('!!! TRACE PROGRAM INITIATED !!!', 'error');
        this.printOutput('SYSTEM LOCKDOWN IMMINENT - 60 SECONDS REMAINING', 'warning');

        let timeLeft = 60;
        const traceInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft % 10 === 0) {
                this.printOutput(`TRACE STATUS: ${Math.floor((60-timeLeft)/60*100)}% COMPLETE`, 'warning');
            }
            if (timeLeft <= 0) {
                clearInterval(traceInterval);
                this.traceInProgress = false;
                this.printOutput('TRACE COMPLETE - SYSTEM LOCKED DOWN', 'error');
                this.accessLevel = 0;
            }
        }, 1000);
    }

    locateUser() {
        this.printOutput('TRIANGULATING USER LOCATION...', 'process');
        setTimeout(() => {
            this.printOutput('LOCATION DATA ACQUIRED:', 'warning');
            this.printOutput('IP ADDRESS: [REDACTED]', 'info');
            this.printOutput('GEOLOCATION: [REDACTED]', 'info');
            this.printOutput('ISP: [REDACTED]', 'info');
            this.printOutput('DEVICE ID: [REDACTED]', 'info');
            this.printOutput('ALL DATA TRANSMITTED TO COMMAND CENTER', 'error');
        }, 2000);
    }

    killProcess(process) {
        if (!process) {
            this.printOutput('ERROR: Specify process to terminate', 'error');
            return;
        }
        this.printOutput(`TERMINATING PROCESS: ${process}`, 'process');
        setTimeout(() => {
            this.printOutput(`PROCESS ${process} TERMINATED - SYSTEM STABILITY COMPROMISED`, 'error');
        }, 1000);
    }


    clear() {
        this.output.innerHTML = '';
        this.printWelcome();
    }

    showSystemInfo() {
        const info = `
        SYSTEM INFORMATION
        =================
        OS: SHADOW_OS v3.1.4
        Kernel: cyber_kernel_2.0
        CPU: QUANTUM_PROC
        Memory: 128TB NEURAL_RAM
        Network: DARK_NET_ENABLED

        Security Level: ${this.accessLevel}
        Trace Status: ${this.traceInProgress ? 'ACTIVE' : 'INACTIVE'}
        `;
        this.printOutput(info, 'info');
    }

    attemptBreach() {
        if (this.accessLevel >= 3) {
            this.printOutput('Contact protocols unlocked. Execute "access 4" to reveal contact information.', 'success');
        } else {
            this.printOutput('BREACH FAILED: Insufficient access level', 'error');
            if (Math.random() > 0.5) this.startTrace();
        }
    }

    decryptFiles() {
        if (this.accessLevel < 2) {
            this.printOutput('ACCESS DENIED: Requires security clearance level 2', 'error');
            return;
        }
        this.printOutput('Decryption sequence initiated...', 'process');
    }

    requestAccess(level) {
        const requestedLevel = parseInt(level);
        if (isNaN(requestedLevel) || requestedLevel < 0 || requestedLevel > 4) {
            this.printOutput('ERROR: Invalid access level requested', 'error');
            return;
        }

        if (requestedLevel <= this.accessLevel) {
            this.printOutput(`Access level ${requestedLevel} already granted`, 'info');
            return;
        }

        if (requestedLevel - this.accessLevel > 1) {
            this.printOutput('ERROR: Can only increase access level by 1', 'error');
            return;
        }

        const challenge = this.generateChallenge(requestedLevel);
        this.printOutput(challenge, 'challenge');
    }

    generateChallenge(level) {
        switch(level) {
            case 1:
                return 'Execute command sequence: scan -> sys -> breach';
            case 2:
                return 'Identify all network vulnerabilities without triggering trace';
            case 3:
                return 'Successfully breach system while trace is active';
            case 4:
                return 'Complete all previous challenges and maintain access for 30 seconds';
            default:
                return 'Invalid challenge level';
        }
    }
}

const terminal = new Terminal();