// src/app/shared/components/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  // Component properties
  appTitle = 'URL Shortener';
  isMenuOpen = false;

  // Navigation items
  navigationItems = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Shorten', route: '/shorten', icon: 'link' },
    { label: 'Analytics', route: '/analytics', icon: 'chart' },
    { label: 'About', route: '/about', icon: 'info' }
  ];

  // Methods
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Helper method to get icons (using emoji for now)
  getIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      home: '🏠',
      link: '🔗',
      chart: '📊',
      info: 'ℹ️'
    };
    return icons[iconName] || '•';
  }
}
