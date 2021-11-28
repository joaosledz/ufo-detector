import { Analytics } from './models/analytics';

export const analytics: Analytics = {
    Modified: '2018-10-12T21:58:00',
    Published: '2010-11-10T03:00:00',

    access: {
        authentication: 'NONE',
        complexity: 'MEDIUM',
        vector: 'NETWORK',
    },
    assigner: 'cve@mitre.org',

    capec: [
        {
            id: '46',
            name: 'Overflow Variables and Tags',
            prerequisites:
                'The target program consumes user-controllable data in the form of tags or variables. The target program does not perform sufficient boundary checking.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '680',
                '697',
                '733',
                '74',
            ],
            solutions:
                'Use a language or compiler that performs automatic bounds checking. Use an abstraction library to abstract away risky APIs. Not a complete solution. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Use OS-level preventative functionality. Not a complete solution. Do not trust input data from user. Validate all user input.',
            summary:
                'This type of attack leverages the use of tags or variables from a formatted configuration data to cause buffer overflow. The attacker crafts a malicious HTML page or configuration file that includes oversized strings, thus causing an overflow.',
        },

        {
            id: '8',
            name: 'Buffer Overflow in an API Call',
            prerequisites:
                'The target host exposes an API to the user. One or more API functions exposed by the target host has a buffer overflow vulnerability.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '680',
                '697',
                '733',
                '74',
            ],
            solutions:
                'Use a language or compiler that performs automatic bounds checking. Use secure functions not vulnerable to buffer overflow. If you have to use dangerous functions, make sure that you do boundary checking. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Use OS-level preventative functionality. Not a complete solution.',
            summary:
                "This attack targets libraries or shared code modules which are vulnerable to buffer overflow attacks. An attacker who has access to an API may try to embed malicious code in the API function call and exploit a buffer overflow vulnerability in the function's implementation. All clients that make use of the code library thus become vulnerable by association. This has a very broad effect on security across a system, usually affecting more than one software process.",
        },

        {
            id: '10',
            name: 'Buffer Overflow via Environment Variables',
            prerequisites:
                'The application uses environment variables. An environment variable exposed to the user is vulnerable to a buffer overflow. The vulnerable environment variable uses untrusted data. Tainted data used in the environment variables is not properly validated. For instance boundary checking is not done before copying the input data to a buffer.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '302',
                '680',
                '697',
                '733',
                '74',
                '99',
            ],
            solutions:
                'Do not expose environment variable to the user. Do not use untrusted data in your environment variables. Use a language or compiler that performs automatic bounds checking There are tools such as Sharefuzz [R.10.3] which is an environment variable fuzzer for Unix that support loading a shared library. You can use Sharefuzz to determine if you are exposing an environment variable vulnerable to buffer overflow.',
            summary:
                'This attack pattern involves causing a buffer overflow through manipulation of environment variables. Once the attacker finds that they can modify an environment variable, they may try to overflow associated buffers. This attack leverages implicit trust often placed in environment variables.',
        },

        {
            id: '123',
            name: 'Buffer Manipulation',
            prerequisites:
                'The adversary must identify a programmatic means for interacting with a buffer, such as vulnerable C code, and be able to provide input to this interaction.',

            related_weakness: ['119'],
            solutions:
                'To help protect an application from buffer manipulation attacks, a number of potential mitigations can be leveraged. Before starting the development of the application, consider using a code language (e.g., Java) or compiler that limits the ability of developers to act beyond the bounds of a buffer. If the chosen language is susceptible to buffer related issues (e.g., C) then consider using secure functions instead of those vulnerable to buffer manipulations. If a potentially dangerous function must be used, make sure that proper boundary checking is performed. Additionally, there are often a number of compiler-based mechanisms (e.g., StackGuard, ProPolice and the Microsoft Visual Studio /GS flag) that can help identify and protect against potential buffer issues. Finally, there may be operating system level preventative functionality that can be applied.',
            summary:
                "An adversary manipulates an application's interaction with a buffer in an attempt to read or modify data they shouldn't have access to. Buffer attacks are distinguished in that it is the buffer space itself that is the target of the attack rather than any code responsible for interpreting the content of the buffer. In virtually all buffer attacks the content that is placed in the buffer is immaterial. Instead, most buffer attacks involve retrieving or providing more input than can be stored in the allocated buffer, resulting in the reading or overwriting of other unintended program memory.",
        },

        {
            id: '24',
            name: 'Filter Failure through Buffer Overflow',
            prerequisites:
                'Ability to control the length of data passed to an active filter.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '680',
                '697',
                '733',
                '74',
            ],
            solutions:
                'Make sure that ANY failure occurring in the filtering or input validation routine is properly handled and that offending input is NOT allowed to go through. Basically make sure that the vault is closed when failure occurs. Pre-design: Use a language or compiler that performs automatic bounds checking. Pre-design through Build: Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Operational: Use OS-level preventative functionality. Not a complete solution. Design: Use an abstraction library to abstract away risky APIs. Not a complete solution.',
            summary:
                'In this attack, the idea is to cause an active filter to fail by causing an oversized transaction. An attacker may try to feed overly long input strings to the program in an attempt to overwhelm the filter (by causing a buffer overflow) and hoping that the filter does not fail securely (i.e. the user input is let into the system unfiltered).',
        },

        {
            id: '47',
            name: 'Buffer Overflow via Parameter Expansion',
            prerequisites:
                'The program expands one of the parameters passed to a function with input controlled by the user, but a later function making use of the expanded parameter erroneously considers the original, not the expanded size of the parameter. The expanded parameter is used in the context where buffer overflow may become possible due to the incorrect understanding of the parameter size (i.e. thinking that it is smaller than it really is).',

            related_weakness: [
                '118',
                '119',
                '120',
                '130',
                '131',
                '20',
                '680',
                '697',
                '74',
            ],
            solutions:
                'Ensure that when parameter expansion happens in the code that the assumptions used to determine the resulting size of the parameter are accurate and that the new size of the parameter is visible to the whole system',
            summary:
                'In this attack, the target software is given input that the attacker knows will be modified and expanded in size during processing. This attack relies on the target software failing to anticipate that the expanded data may exceed some internal limit, thereby creating a buffer overflow.',
        },

        {
            id: '9',
            name: 'Buffer Overflow in Local Command-Line Utilities',
            prerequisites:
                'The target host exposes a command-line utility to the user. The command-line utility exposed by the target host has a buffer overflow vulnerability that can be exploited.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '680',
                '697',
                '733',
                '74',
            ],
            solutions:
                "Carefully review the service's implementation before making it available to user. For instance you can use manual or automated code review to uncover vulnerabilities such as buffer overflow. Use a language or compiler that performs automatic bounds checking. Use an abstraction library to abstract away risky APIs. Not a complete solution. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Operational: Use OS-level preventative functionality. Not a complete solution. Apply the latest patches to your user exposed services. This may not be a complete solution, especially against a zero day attack. Do not unnecessarily expose services.",
            summary:
                'This attack targets command-line utilities available in a number of shells. An attacker can leverage a vulnerability found in a command-line utility to escalate privilege to root.',
        },

        {
            id: '14',
            name: 'Client-side Injection-induced Buffer Overflow',
            prerequisites:
                'The targeted client software communicates with an external server. The targeted client software has a buffer overflow vulnerability.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '353',
                '680',
                '697',
                '713',
                '74',
            ],
            solutions:
                'The client software should not install untrusted code from a non-authenticated server. The client software should have the latest patches and should be audited for vulnerabilities before being used to communicate with potentially hostile servers. Perform input validation for length of buffer inputs. Use a language or compiler that performs automatic bounds checking. Use an abstraction library to abstract away risky APIs. Not a complete solution. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Ensure all buffer uses are consistently bounds-checked. Use OS-level preventative functionality. Not a complete solution.',
            summary:
                'This type of attack exploits a buffer overflow vulnerability in targeted client software through injection of malicious content from a custom-built hostile service.',
        },

        {
            id: '44',
            name: 'Overflow Binary Resource File',
            prerequisites:
                'Target software processes binary resource files. Target software contains a buffer overflow vulnerability reachable through input from a user-controllable binary resource file.',

            related_weakness: ['119', '120', '697', '713'],
            solutions:
                'Perform appropriate bounds checking on all buffers. Design: Enforce principle of least privilege Design: Static code analysis Implementation: Execute program in less trusted process space environment, do not allow lower integrity processes to write to higher integrity processes Implementation: Keep software patched to ensure that known vulnerabilities are not available for attackers to target on host.',
            summary:
                'An attack of this type exploits a buffer overflow vulnerability in the handling of binary resources. Binary resources may include music files like MP3, image files like JPEG files, and any other binary file. These attacks may pass unnoticed to the client machine through normal usage of files, such as a browser loading a seemingly innocent JPEG file. This can allow the attacker access to the execution stack and execute arbitrary code in the target process. This attack pattern is a variant of standard buffer overflow attacks using an unexpected vector (binary files) to wrap its attack and open up a new attack vector. The attacker is required to either directly serve the binary content to the victim, or place it in a locale like a MP3 sharing application, for the victim to download. The attacker then is notified upon the download or otherwise locates the vulnerability opened up by the buffer overflow.',
        },

        {
            id: '42',
            name: 'MIME Conversion',
            prerequisites:
                "The target system uses a mail server. Mail server vendor has not released a patch for the MIME conversion routine, the patch itself has a security hole or does not fix the original problem, or the patch has not been applied to the user's system.",

            related_weakness: ['119', '120', '20', '74'],
            solutions:
                'Stay up to date with third party vendor patches From Exploiting Software, please see reference below. Use the sendmail restricted shell program (smrsh) Use mail.local',
            summary:
                'An attacker exploits a weakness in the MIME conversion routine to cause a buffer overflow and gain control over the mail server machine. The MIME system is designed to allow various different information formats to be interpreted and sent via e-mail. Attack points exist when data are converted to MIME compatible format and back.',
        },

        {
            id: '45',
            name: 'Buffer Overflow via Symbolic Links',
            prerequisites:
                'The attacker can create symbolic link on the target host. The target host does not perform correct boundary checking while consuming data from a resources.',

            related_weakness: [
                '118',
                '119',
                '120',
                '20',
                '285',
                '302',
                '680',
                '697',
                '74',
            ],
            solutions:
                'Pay attention to the fact that the resource you read from can be a replaced by a Symbolic link. You can do a Symlink check before reading the file and decide that this is not a legitimate way of accessing the resource. Because Symlink can be modified by an attacker, make sure that the ones you read are located in protected directories. Pay attention to the resource pointed to by your symlink links (See attack pattern named Forced Symlink race), they can be replaced by malicious resources. Always check the size of the input data before copying to a buffer. Use a language or compiler that performs automatic bounds checking. Use an abstraction library to abstract away risky APIs. Not a complete solution. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Use OS-level preventative functionality. Not a complete solution.',
            summary:
                'This type of attack leverages the use of symbolic links to cause buffer overflows. An attacker can try to create or manipulate a symbolic link file such that its contents result in out of bounds data. When the target software processes the symbolic link file, it could potentially overflow internal buffers with insufficient bounds checking.',
        },

        {
            id: '100',
            name: 'Overflow Buffers',
            prerequisites:
                'Targeted software performs buffer operations. Targeted software inadequately performs bounds-checking on buffer operations. Adversary has the capability to influence the input to buffer operations.',

            related_weakness: ['119', '120', '129', '131', '19', '680', '805'],
            solutions:
                'Use a language or compiler that performs automatic bounds checking. Use secure functions not vulnerable to buffer overflow. If you have to use dangerous functions, make sure that you do boundary checking. Compiler-based canary mechanisms such as StackGuard, ProPolice and the Microsoft Visual Studio /GS flag. Unless this provides automatic bounds checking, it is not a complete solution. Use OS-level preventative functionality. Not a complete solution. Utilize static source code analysis tools to identify potential buffer overflow weaknesses in the software.',
            summary:
                "Buffer Overflow attacks target improper or missing bounds checking on buffer operations, typically triggered by input injected by an adversary. As a consequence, an adversary is able to write past the boundaries of allocated buffer regions in memory, causing a program crash or potentially redirection of execution as per the adversaries' choice.",
        },
    ],
    cvss: 9.3,
    id: 'CVE-2010-3333',
};