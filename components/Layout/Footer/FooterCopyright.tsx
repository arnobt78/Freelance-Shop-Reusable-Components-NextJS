export default function FooterCopyright() {
  return (
    <p className="text-gray-500 text-xs md:text-sm text-center sm:text-right">
      © Snuzz {new Date().getUTCFullYear()}. All Rights Reserved.
    </p>
  );
}
