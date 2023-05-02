import React from "react";
import "./imgs/file-icon.png";
//import "./styles.css";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";

export default function File() {
  const encryptionSignature = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const messageRequested = (await lighthouse.getAuthMessage(address)).data
      .message;
    const signedMessage = await signer.signMessage(messageRequested);
    return {
      signedMessage: signedMessage,
      publicKey: address,
    };
  };
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const deployEncrypted = async (e) => {
    const sig = await encryptionSignature();
    const response = await lighthouse.uploadEncrypted(
      e,
      sig.publicKey,
      "9c71f841-5378-4562-aecc-eaadc3455d9f",
      sig.signedMessage,
      progressCallback
    );
    console.log(response);
    //window.alert(response.data.Hash);
  };

  const [fileURL, setFileURL] = React.useState(null);

  const sign_auth_message = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const publicKey = (await signer.getAddress()).toLowerCase();
    const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
      .message;
    const signedMessage = await signer.signMessage(messageRequested);
    return { publicKey: publicKey, signedMessage: signedMessage };
  };

  const decrypt = async () => {
    // Fetch file encryption key
    const CID = prompt("Enter Your Cid");
    const cid = CID;
    // const cid = "QmcuuAtmYqbPYmPx3vhJvPDi61zMxYvJbfENMjBQjq7aM3"; //replace with your IPFS CID
    const { publicKey, signedMessage } = await sign_auth_message();
    console.log(signedMessage);
    const keyObject = await lighthouse.fetchEncryptionKey(
      cid,
      publicKey,
      signedMessage
    );
    const fileType = "image/jpeg";
    const decrypted = await lighthouse.decryptFile(
      cid,
      keyObject.data.key,
      fileType
    );
    console.log(decrypted);
    const url = URL.createObjectURL(decrypted);
    console.log(url);
    setFileURL(url);
  };

  const signAuthMessage = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const publicKey = (await signer.getAddress()).toLowerCase();
    const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
      .message;
    const signedMessage = await signer.signMessage(messageRequested);
    return { publicKey: publicKey, signedMessage: signedMessage };
  };

  const shareFile = async () => {
   // const CID = prompt("Enter Your Cid");
   // const cid = CID;
    const cid = "QmaCPhLqJEUvJVCjvMEzb6H3XXZ5e3ndRZZ51WK7kzMNTv";

    const { publicKey, signedMessage } = await signAuthMessage();

    const publicKeyUserB = ["0x6Fd256273f1aC1c9a4dd60bfEbd8eE7f83470E53"];

    const res = await lighthouse.shareFile(
      publicKey,
      publicKeyUserB,
      cid,
      signedMessage
    );

    console.log(res);
    
  };
  return (
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="m-8 relative space-y-4">
          <div class="p-8 grid place-items-center bg-white bg-opacity-40 backdrop-blur rounded-lg">
            <div>
              <img
                src={require("./imgs/file-icon.png")}
                class="scale-25"
                className="float"
                alt="file-icon"
              ></img>
            </div>
            <div>
              <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 lg:text-4xl">
                Share Files
              </h1>
            </div>
            <div class="mb-4">
              <p class="text-md text-center">
                Enrypt your files at the speed of light.
              </p>
            </div>
            <div class="mt-2 ml-20">
              <input onChange={(e) => deployEncrypted(e)} type="file" />
              <div class="-ml-5 flex gap-8 mt-5">
                <button
                  class="px-6 py-1 text-white hover:bg-indigo-800 bg-indigo-400 rounded-xl"
                  onClick={() => decrypt()}
                >
                  Decrypt
                </button>
                {fileURL ? (
                  <a href={fileURL} target="_blank">
                    viewFile
                  </a>
                ) : null}

                <button
                  class="px-6 py-1 text-white hover:bg-indigo-800 bg-indigo-400 rounded-xl"
                  onClick={() => shareFile()}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// class="bg-indigo-400 text-white rounded-lg hover:bg-indigo-700 transition duration-500"
