import Link from "next/link";

export default function RightBar() {
    const sidebarItems = [
        { icon: '🏠', text: 'Home' },
        { icon: '🎙️', text: 'Podcasts' },
        { icon: '📹', text: 'Videos' },
        { icon: '🏷️', text: 'Tags' },
        { icon: '❓', text: 'DEV Help' },
        { icon: '🛒', text: 'Forem Shop' },
        { icon: '❤️', text: 'Advertise on DEV' },
        { icon: '🏆', text: 'DEV Challenges' },
        { icon: '✨', text: 'DEV Showcase' },
        { icon: 'ℹ️', text: 'About' },
        { icon: '📞', text: 'Contact' },
        { icon: '📚', text: 'Guides' },
        { icon: '🔄', text: 'Software comparisons' },
      ]
    
    return (
        <aside className="w-64 pl-4 bg-gray-100">
            <nav>
                <ul>
                {sidebarItems.map((item, index) => (
                    <li key={index} className="mb-4">
                    <Link href="#" className="flex items-center text-gray-800 hover:text-black">
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.text}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </aside>
    )
}