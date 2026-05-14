# Hanko - Electronic Signature Tool

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A browser-based tool for creating and verifying electronic signatures using public-key cryptography. It provides a complete workflow for key generation, certificate issuance, document signing, and verification.

## Demo

The main application provides a step-by-step workflow for creating and using digital identities.

*   **[Hanko - Electronic Signature Tool](https://code4fukui.github.io/hanko/)**

For a quick introduction to the concepts of signing and verification, try the interactive tutorial:

*   **[Interactive Tutorial](https://code4fukui.github.io/hanko/experience.html)**

## Features

*   **Key Generation**: Create public/private key pairs directly in your browser.
*   **Certificate Issuance**: Act as a Certificate Authority (CA) to sign and issue certificates for public keys.
*   **Certificate Management**: Combine your private key with a received certificate to create a complete digital identity.
*   **Document Signing**: Sign any file by creating a detached signature file (`.hanko.txt`).
*   **Signature Verification**: Verify that a document's signature is authentic and that the signer's certificate is valid.
*   **Zero Installation**: Runs entirely in the browser with no server-side components or installation required.

## Workflow

The tool is divided into several steps, each handled by a separate page. The typical workflow involves a **User** who wants to sign documents and a **Certificate Authority (CA)** who validates the user's identity.

#### 1. Generate Keys (`init.html`)
As a **User**, you start by creating a key pair.
1.  Open `init.html`.
2.  Click "Generate public and private keys".
3.  Enter your name and a strong password.
4.  Download two files:
    *   `name.seckey_no_cert.txt`: Your password-protected private key. **Keep this secret.**
    *   `name.pubkey.txt`: Your public key. Send this to a CA to be certified.

#### 2. Issue Certificate (`cert.html`)
As a **Certificate Authority**, you sign the user's public key.
1.  Open `cert.html`.
2.  Drag and drop your own CA private key file (e.g., `ca.seckey.txt`).
3.  Drag and drop the user's public key file (`name.pubkey.txt`).
4.  A `name.certificate.txt` file is downloaded. Send this certificate file back to the user.

#### 3. Register Certificate (`regist.html`)
As the **User**, you combine your private key with the certificate you received.
1.  Open `regist.html`.
2.  Drag and drop your initial private key (`name.seckey_no_cert.txt`).
3.  Drag and drop the certificate file from the CA (`name.certificate.txt`).
4.  A new, complete private key file (`name.seckey.txt`) is downloaded. Use this for all future signing.

#### 4. Sign a Document (`sign.html`)
As the **User**, you can now sign documents.
1.  Open `sign.html`.
2.  Drag and drop your complete private key file (`name.seckey.txt`) and enter your password.
3.  Drag and drop the file you wish to sign (e.g., `document.pdf`).
4.  A signature file (`document.pdf.name.hanko.txt`) is downloaded.

#### 5. Verify a Signature (`verify.html`)
**Anyone** can verify the signed document.
1.  Open `verify.html`.
2.  Drag and drop the original, unsigned file (`document.pdf`).
3.  Drag and drop the signature file (`document.pdf.name.hanko.txt`).
4.  The tool will confirm whether the signature is valid for the document and display the certificate details.

## Data / API

This project is built using the following libraries:
- [sec.js](https://github.com/code4fukui/sec.js) for cryptographic operations.
- [Base32](https://github.com/code4fukui/Base32) for data encoding.
- [input-text](https://github.com/code4fukui/input-text) for custom UI components.
- [qr-code](https://github.com/code4fukui/qr-code) for QR code generation.

## License

MIT License — see [LICENSE](LICENSE).